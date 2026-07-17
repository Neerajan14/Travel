    $(document).ready(function () {
            $("#from").datepicker({
                dateFormat: "dd M yy",
                minDate: 0,
                onSelect: function (selectedDate) {
                    $("#to").datepicker("option", "minDate", selectedDate);
                }
            });

            $("#to").datepicker({
                dateFormat: "dd M yy",
                minDate: 0
            });

            $("#guest").select2({
                minimumResultsForSearch: Infinity,
                width: "100%"
            });
        });

        fetch("nav.html").then(res => res.text()).then(data => { document.getElementById("navbar").innerHTML = data; });
        fetch("footer.html").then(res => res.text()).then(data => { document.getElementById("footer").innerHTML = data; });