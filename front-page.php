<?php 
get_header(); ?>
<div id="primary" class="full-content-area">
	<div class="wrapper">
		<?php get_template_part('inc/project-categories'); ?>
	</div>
	<?php while ( have_posts() ) : the_post(); 
		$col_right = get_field('home_column_right');
		$col_left = get_field('home_column_left'); ?>

		<?php if ( $col_right || $col_left ) { ?>
		<section class="home-column-text clear">
			<div class="wrapper">
				<div class="flexrow clear">
					<div class="column right">
						<div class="inside clear"><?php echo $col_right; ?></div>
					</div>
					<div class="column left">
						<div class="inside clear"><?php echo $col_left; ?></div>
					</div>
				</div>
			</div>	
		</section>	
		<?php } ?>

		<?php get_template_part('inc/latest-news'); ?>

	<?php endwhile; ?>
</div><!-- #primary -->
<?php get_footer(); ?>