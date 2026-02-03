import Swal from 'sweetalert2';

//     title: 'Are you sure?',
//     text: 'You will not be able to recover this file!',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#d33',
//     cancelButtonColor: '#3085d6',
//     confirmButtonText: 'Yes, delete it!',

const SweetAlert = (data) => {
  return Swal.fire({
    title: data?.title ? data?.title : '',
    text: data?.text ? data?.text : '',
    icon: data?.icon ? data?.icon : '',
    showCancelButton: data?.cancelBtn ? data?.cancelBtn : false,
    showConfirmButton: data?.confirmBtn ? data?.confirmBtn : false,
    confirmButtonText: data?.confirmBtnText ? data?.confirmBtnText : '',
    cancelButtonText: data?.cancelBtnText ? data?.cancelBtnText : '',
    cancelButtonColor: data?.cancelBtnColor ? data?.cancelBtnColor :  '',
    confirmButtonColor: data?.confirmBtnColor ? data?.confirmBtnColor : '',
    showCloseButton: data?.closeBtn ? data?.closeBtn : false,
    customClass: {
      popup: data?.popupClass || "",
      title: data?.titleClass || "",
      htmlContainer: data?.textClass || "",
      confirmButton: data?.confirmBtnClass || "",
      cancelButton: data?.cancelBtnClass || "",
    }
  });
};

export { SweetAlert };
