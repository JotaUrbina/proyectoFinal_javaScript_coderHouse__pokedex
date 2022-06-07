const notFoundAlert = () => {
  Swal.fire({
    title: "¡Lo sentimos! Este Pokemon aún no se encuentra en nuestra base de datos.",
    focusConfirm: false,
    confirmButtonText: "Ok!",
    confirmButtonAriaLabel: "Ok!",
  });
};

const notExistAlert = () => {
  Swal.fire({
    title: "Este pokemon no está registrado en la pokedex nacional",
    focusConfirm: false,
    confirmButtonText: "Ok!",
    confirmButtonAriaLabel: "Ok!",
  });
};

const notFavoriteAlert = () => {
  Swal.fire({
    title: "No has agregado ningún pokemon a tu lista de favoritos.",
    html:
      `<i class="fa-heart fa-regular alertHeart"></i>` + `<i class="fa-heart fa-solid alertHeartSolid"></i>`,
    focusConfirm: false,
    confirmButtonText: "Ok!",
    confirmButtonAriaLabel: "Ok!",
  });
};
