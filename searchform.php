<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
	<label>
		<div class="eyeglass"></div>
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'enter search terms', 'placeholder' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
	</label>
	
</form>