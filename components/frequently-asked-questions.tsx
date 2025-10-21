const FrequentlyAskedQuestions = () => {
    const dummyQuestions = [
        {
            question: "How do I submit my project?",
            answer: "You can submit your project by clicking on the 'Share your entry' button and filling out the submission form."
        },
        {
            question: "What are the criteria for being featured?",
            answer: "Projects are selected based on creativity, innovation, and community impact."
        },
        {
            question: "Can I update my submission after it's been sent?",
            answer: "Yes, you can update your submission by contacting our support team with your project details."
        },
        {
            question: "How often are new projects featured?",
            answer: "New projects are featured on a monthly basis, so be sure to check back regularly!"
        },
        {
            question: "Is there a limit to how many projects I can submit?",
            answer: "There is no limit to the number of projects you can submit. Feel free to share all your innovative ideas!"
        }
    ]

    return (
        <div>
            <section>
                <h2 className="font-bold font-bebas text-7xl text-center ">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
            </section>

            {/* Use a details summary for now */}
            <ul className="my-16">
                {dummyQuestions.map((item, index) => (
                    <li key={index} className=" border-retro py-8 px-4">
                        <details>
                            <summary className="cursor-pointer font-bold text-lg">
                                {item.question}
                            </summary>
                            <p className="mt-2 ">
                                {item.answer}
                            </p>
                        </details>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FrequentlyAskedQuestions;
