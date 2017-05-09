function show_hide_HCP_confirmation() {
    if (document.getElementById("HCP_Confirmation_radio_yes").checked) {
        document.getElementById("HCP_visible_tbl").style.display = "";
    } 
    else if (document.getElementById("HCP_Confirmation_radio_no").checked) {
        document.getElementById("HCP_visible_tbl").style.display = "none";
    }

}