import { handleInput, clearInput } from '../src/Order.js';

describe("Tests all stages of a spa booking", function () {
    beforeEach(function () {
        clearInput();
    });

    // Welcome
    it("test welcome message", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Quiet Oasis Spa!");
    });

    it("test welcome shows service menu", function () {
        const aResults = handleInput("hello");
        expect(aResults[1]).toContain("Full Body Massage");
    });

    // Service selection
    it("test select full body massage", function () {
        handleInput("hello");
        const aResults = handleInput("1");
        expect(aResults[0]).toBe("For your Full Body Massage, would you prefer light, medium, or deep pressure?");
    });

    it("test select anti-aging", function () {
        handleInput("hello");
        const aResults = handleInput("2");
        expect(aResults[0]).toBe("What is your primary skin concern?");
    });

    it("test select facial", function () {
        handleInput("hello");
        const aResults = handleInput("3");
        expect(aResults[0]).toBe("What is your skin type?");
    });

    it("test select herbal body wrap", function () {
        handleInput("hello");
        const aResults = handleInput("4");
        expect(aResults[0]).toBe("For your Herbal Body Wrap, which scent would you prefer?");
    });

    it("test select manicure", function () {
        handleInput("hello");
        const aResults = handleInput("5");
        expect(aResults[0]).toBe("Which type of manicure would you like?");
    });

    it("test select pedicure", function () {
        handleInput("hello");
        const aResults = handleInput("6");
        expect(aResults[0]).toBe("Which type of pedicure would you like?");
    });

    it("test select waxing", function () {
        handleInput("hello");
        const aResults = handleInput("7");
        expect(aResults[0]).toBe("Which area would you like waxed?");
    });

    it("test invalid service input", function () {
        handleInput("hello");
        const aResults = handleInput("pizza");
        expect(aResults[0]).toBe("I didn't quite catch that — please choose one of the services below.");
    });

    // Add-on yes
    it("test add-on yes after massage", function () {
        handleInput("hello");
        handleInput("1");
        handleInput("deep");
        const aResults = handleInput("yes");
        expect(aResults[0]).toBe("Wonderful, we'll include that for you!");
    });

    // Add-on no
    it("test add-on no after massage", function () {
        handleInput("hello");
        handleInput("1");
        handleInput("light");
        const aResults = handleInput("no");
        expect(aResults[0]).toBe("No problem at all!");
    });

    // Booking time prompt
    it("test booking time prompt appears after add-on", function () {
        handleInput("hello");
        handleInput("1");
        handleInput("medium");
        const aResults = handleInput("yes");
        expect(aResults[1]).toBe("What time would you prefer?");
    });

    // Booking confirmation
    it("test booking confirmation message", function () {
        handleInput("hello");
        handleInput("1");
        handleInput("deep");
        handleInput("yes");
        const aResults = handleInput("morning");
        expect(aResults[0]).toBe("Your appointment is confirmed! ✨");
    });

    it("test booking follow-up message", function () {
        handleInput("hello");
        handleInput("1");
        handleInput("deep");
        handleInput("yes");
        const aResults = handleInput("morning");
        expect(aResults[1]).toBe("We look forward to welcoming you to Quiet Oasis. Please arrive 10 minutes early to settle in and unwind.");
    });

    // Full flow - facial
    it("test full facial booking flow", function () {
        handleInput("hello");
        handleInput("3");
        handleInput("oily");
        handleInput("no");
        const aResults = handleInput("afternoon");
        expect(aResults[0]).toBe("Your appointment is confirmed! ✨");
    });

    // Reset - state returns to welcome after booking
    it("test state resets to welcome after booking", function () {
        handleInput("hello");
        handleInput("2");
        handleInput("fine lines");
        handleInput("no");
        handleInput("evening");
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Quiet Oasis Spa!");
    });

    // clearInput resets state
    it("test clearInput resets to welcome", function () {
        handleInput("hello");
        handleInput("1");
        clearInput();
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Quiet Oasis Spa!");
    });
});