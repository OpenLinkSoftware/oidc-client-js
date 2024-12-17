import { JsonService } from '../../src/JsonService';
import chai from 'chai';
import sinon from 'sinon';

chai.should();
let assert = chai.assert;

describe("JsonService", function() {
    let subject;

    beforeEach(function() {
        global.fetch = sinon.stub(); // Подготавливаем заглушку для fetch
        subject = new JsonService();
    });

    describe("getJson", function() {
        it("should require a url parameter", async function() {
            try {
                await subject.getJson();
                assert.fail("Expected error for missing URL");
            } catch (e) {
                e.message.should.equal("url");
            }
        });

        it("should make GET request to the specified URL", async function() {
            fetch.resolves({
                ok: true,
                status: 200,
                headers: { get: () => "application/json" },
                json: async () => ({ foo: 1 })
            });

            const result = await subject.getJson("http://test");
            fetch.calledWith("http://test", sinon.match.has("method", "GET")).should.be.true;
            result.should.deep.equal({ foo: 1 });
        });

        it("should set Authorization header if token is provided", async function() {
            fetch.resolves({
                ok: true,
                status: 200,
                headers: { get: () => "application/json" },
                json: async () => ({ foo: 1 })
            });

            await subject.getJson("http://test", "token");
            fetch.calledWith("http://test", sinon.match.hasNested("headers.Authorization", "Bearer token")).should.be.true;
        });

        it("should reject promise when response is not ok", async function() {
            fetch.resolves({ ok: false, status: 404, statusText: "Not Found" });

            try {
                await subject.getJson("http://test");
                assert.fail();
            } catch (e) {
                e.message.should.equal("Not Found (404)");
            }
        });

        it("should reject when response content type is invalid", async function() {
            fetch.resolves({
                ok: true,
                status: 200,
                headers: { get: () => "text/html" },
                json: async () => ({})
            });

            try {
                await subject.getJson("http://test");
                assert.fail();
            } catch (e) {
                e.message.should.include("Invalid response Content-Type");
            }
        });
    });

    describe("postForm", function() {
        it("should require a url parameter", async function() {
            try {
                await subject.postForm();
                assert.fail("Expected error for missing URL");
            } catch (e) {
                e.message.should.equal("url");
            }
        });

        it("should make POST request with form data", async function() {
            fetch.resolves({
                ok: true,
                status: 200,
                headers: { get: () => "application/json" },
                json: async () => ({ success: true })
            });

            const payload = { key1: "value1", key2: "value2" };
            const result = await subject.postForm("http://test", payload);
            
            fetch.calledWith("http://test", sinon.match({
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: "key1=value1&key2=value2"
            })).should.be.true;

            result.should.deep.equal({ success: true });
        });

        it("should set Authorization header for basic auth", async function() {
            fetch.resolves({
                ok: true,
                status: 200,
                headers: { get: () => "application/json" },
                json: async () => ({ success: true })
            });

            const payload = { key: "value" };
            await subject.postForm("http://test", payload, "username:password");

            const expectedAuth = "Basic " + btoa("username:password");
            fetch.calledWith("http://test", sinon.match.hasNested("headers.Authorization", expectedAuth)).should.be.true;
        });

        it("should handle 400 response with error payload", async function() {
            fetch.resolves({
                ok: false,
                status: 400,
                headers: { get: () => "application/json" },
                json: async () => ({ error: "Bad Request" })
            });

            try {
                await subject.postForm("http://test", {});
                assert.fail();
            } catch (e) {
                e.message.should.equal("Bad Request");
            }
        });
    });
});
