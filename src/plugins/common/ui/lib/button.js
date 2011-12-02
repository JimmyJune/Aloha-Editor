define([ 'aloha/jquery', 'ui/ui' ],
function( jQuery, Ui ) {
	
	// The button component type creates a simple button.
	// Buttons have no state, they only respond to click events.
	Ui.createType( "button", {
		
		// The `init` method is invoked when the component is rendered, not when it
		// is created. This is necessary to allow multiple renderings of the same
		// component. For example, you may want a component to be in the toolbar
		// and in the sidebar.
		init: function( editable, settings ) {
			this._super( editable, settings );
			
			this.createButtonElement()
				.button({
					label: this.settings.label,
					text: !settings.iconOnly,
					icons: {
						primary: settings.icon
					}
				})
				.button( "widget" )
					.tooltip({
						position: {
							my: "left top",
							at: "right bottom"
						}
					})
					.click( jQuery.proxy(function() {
						this.click();
						return false;
					}, this ) );
		},
		
		// The `click()` method is invoked whenever the user clicks the rendered button.
		click: function() {
			this.settings.click.apply( this, arguments );
		},
		
		createButtonElement: function() {
			return this.element = this.buttonElement = jQuery( "<button>" );
		}
	});
	
	return Ui.button;
});