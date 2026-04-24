import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router"
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Upgrade() {
    const role = useOutletContext<string>();

    const [secret, setSecret] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();


    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        const uri = import.meta.env.VITE_backend_uri + "upgrade";

        try {
            const response = await fetch(uri, {
                method: "POST",
                body: JSON.stringify({secret}),
                headers: {
                    Authorization: "bearer " + localStorage.getItem("token"),
                    "Content-type" : "application/json"
                },
                mode: "cors",
            })


            if (response.status == 400) {
                setErrorMessage("Invalid passphrase");
            }
            else if (response.status == 403) {
                setErrorMessage("Your current role is not USER");
            }
            else if (response.status == 200) {
                navigate('/dashboard');
            }
            else {
                setErrorMessage(response.status + " error");
                console.log(response);
            }
        }
        catch (err) {
            setErrorMessage("Some error occurred! Refer to console");
            console.error(err);
        }
    }


    return <div className="flex flex-col items-center justify-center overflow-x-hidden px-5 mt-15">
        <h2 className="text-xl text-center">Your current role is
            <span className="text-primary">{" " + role}</span>
        </h2>

        <h2 className="text-xl text-center mt-2">
            To upgrade, you need to enter the secret passphrase
        </h2>
        <section className="w-full max-w-lg mt-5">
            {errorMessage && (
                <div className="mb-5 rounded-bl-xs bg-red-950 py-2 text-center">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="mt-10">
                <FieldGroup>
                    <Field>
                        <Input
                            type="password"
                            id="secret"
                            placeholder="Enter the secret passphrase"
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)}
                            className="py-5 text-base!"
                        />
                    </Field>
                    <Field
                        orientation="horizontal"
                        className="mt-5 mb-20 flex flex-col items-center"
                    >
                        <Button
                            type="submit"
                            className="w-32 cursor-pointer rounded-2xl p-5 py-7 text-lg"
                        >
                            Upgrade
                        </Button>
                    </Field>
                </FieldGroup>
            </form>

        </section>

    </div>
}