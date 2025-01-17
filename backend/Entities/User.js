class User {
  loginForm() {
    let form = `
      <form action="" class="col-md-6 col-11 mx-auto p-3 border border-2 rounded  shadow h-fit">
        <h2 class="text-center text-uppercase fw-700 text-success m-5">Login</h2>
      <input type="email" class="d-block m-3 mx-auto w-75"  placeholder="Email" />
      <input
        type="password"
        class="d-block m-3 mx-auto w-75"
        placeholder="Password"
      />
      <button
        type="submit"
        class="btn btn-primary d-block mx-5 float-end w-25"
      >
        Submit
      </button>
    </form>
    `;

    window.offcanvas.setTitle("Login");
    window.offcanvas.setContent(form);
    window.offcanvas.show();
  }
}

export { User };
