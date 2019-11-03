import Vue from "vue";
import Swal from "sweetalert2";

Object.defineProperty(Swal, "success", {
  value: function(title = "成功", text = "", next, confirmButtonText = "OK") {
    this.fire({
      type: "success",
      title: title,
      html: text,
      confirmButtonText: confirmButtonText
    }).then(() => {
      if (next) {
        next();
      }
    });
  }
});

Object.defineProperty(Swal, "error", {
  value: function(title = "Lỗi :(", text = "", next, confirmButtonText = "OK") {
    this.fire({
      type: "error",
      title: title,
      html: text,
      confirmButtonText: confirmButtonText
    }).then(() => {
      if (next) {
        next();
      }
    });
  }
});

Object.defineProperty(Swal, "warning", {
  value: function(title = "警告", text = "", next, confirmButtonText = "OK") {
    this.fire({
      type: "warning",
      title: title,
      html: text,
      confirmButtonText: confirmButtonText
    }).then(() => {
      if (next) {
        next();
      }
    });
  }
});

Object.defineProperty(Swal, "confirm", {
  value: function(title = "警告", text = "", next, confirmButtonText = "OK", cancelButtonText = "キャンセル", cancel) {
    this.fire({
      type: "warning",
      title: title,
      html: text,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    }).then((result) => {
      if (result.value && next) {
        next();
      } else if (cancel) {
        cancel();
      }
    });
  }
});

Object.defineProperty(Swal, "deletedSuccessfully", {
  value: function(title = "削除に成功しました", text = "") {
    this.fire({
      type: "success",
      title: title,
      html: text,
      showConfirmButton: false,
      timer: 1000,
      customClass: {
        container: "z-index-2100"
      }
    });
  }
});

Object.defineProperty(Vue.prototype, "$swal", {
  value: Swal
});
