import FormComponent from "@/components/forms/FormComponent";
// import Footer from "@/components/common/Footer";

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl">
                            Collaborative Coding
                        </h1>
                        <p className="mt-2 text-lg text-white sm:text-xl">
                            Learn and build together
                        </p>
                        <pre className="mt-4 font-mono text-sm text-white sm:text-base">
{`  {}
  // Code as a team
  fn learn() => share()
`}
                        </pre>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default HomePage;