<script type="text/javascript">
    enquire.register("screen and (max-width:480px)", {
        match : function() { 
                $('#tertiary-col').insertAfter('#expfact');
        },
        unmatch : function() {
                $('#tertiary-col').insertBefore('#factory');
        }
    }).listen();
</script>