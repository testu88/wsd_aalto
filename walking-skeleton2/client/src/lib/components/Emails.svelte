<script>
    import { PUBLIC_API_URL } from "$env/static/public";
    let error = $state("");
    const errorsByField = {};

    const submitForm = async (e) => {
        e.preventDefault();
        error = "";

        const form = Object.fromEntries(new FormData(e.target));
        const response = await fetch(`${PUBLIC_API_URL}/api/emails`, {
            method: "POST",
            headers: { "Content-Type":"application/json" ,},
            body: JSON.stringify(form),
        } );

        const data = await response.json();
        console.log("Data:", data);
        if (data.success === false){
            console.log("Error:", data.error?.message[0].message);
            error = data.error?.message[0].message;
            return;
        }
        /*console.log("Errors:", errors);
        if (data.success){
            console.log("errors: ", data.error);
        data.error?.issues?.forEach(issue => {
            const fieldName = issue.path[0];
            if (!errorsByField[fieldName]){
                errorsByField[fieldName] = [];
            }
            errorsByField[fieldName].push(issue.message);
        });
        };*/
        e.target.reset();
    };

</script>

<form onsubmit={submitForm}>
    {#if errorsByField.email}
    <p>Error: {errorsByField.email.join(", ")}</p>
    {/if}
    <label>
        Type in your email:
        <input type="email" id="email" name="email" />
    </label>
    <br />
    <input type="submit" value="Submit email to server" />
</form>


{#if error}
<p>Error: {error.message}</p>
{/if}