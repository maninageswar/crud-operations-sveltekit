<script>
    let { data, form } = $props();
    console.log("data:", data);

    /**
   * @type {HTMLFormElement}
   */
    let formElement;

    function submitToRegister() {
        formElement.action = '?/register';
        formElement.requestSubmit(); // triggers the form submission
  }

</script>

{#if form?.message}
    <p class="success">{form.message}</p>
{/if}

<form method="POST" bind:this={formElement} action="?/login">
    <div>
        <label for="username">username: </label>
        <input type="text" name="username" id="username">
    </div>
    <br>
    <div>
        <label for="username">password: </label>
        <input type="text" name="password" id="password">
    </div>
    <br>
    <input type="submit" value="Login">
    <!-- if you want to attach an action to a button you can use formaction 
     provided the button is inside form element -->
    <button formaction="?/register">register</button>
</form>

<!-- if you want to call an action form outside form element this is how you do it -->
 <br>
<button onclick={submitToRegister}>submitToRegister</button>

<!-- <form method="POST">
    <button formaction="?/register">something</button>
</form> -->


{#if form?.error}
    <p class="error">{form.error}</p>
{/if}

<style>
    .success {
        color:green
    }

    .error {
        color: red;
    }
</style>