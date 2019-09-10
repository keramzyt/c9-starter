<?php

/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package c9
 */


/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
if (!function_exists('cortextoo_posted_on')) {
	function cortextoo_posted_on()
	{
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if (get_the_time('U') !== get_the_modified_time('U')) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s"> (%4$s) </time>';
		}
		$time_string = sprintf(
			$time_string,
			esc_attr(get_the_date('c')),
			esc_html(get_the_date()),
			esc_attr(get_the_modified_date('c')),
			esc_html(get_the_modified_date())
		);
		$posted_on = sprintf(
			esc_html_x('Posted on %s', 'post date', 'c9' ),
			'<a href="' . esc_url(get_permalink()) . '" rel="bookmark">' . $time_string . '</a>'
		);

		$cortextoo_posted_on = '<span class="posted-on">' . $posted_on . '</span>';

		if (!get_option('cortex_posts') || get_option('cortex_posts')['author_visible'] === "show") {
			$byline = sprintf(
				esc_html_x('by %s', 'post author', 'c9' ),
				'<span class="author vcard"><a class="url fn n" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a></span>'
			);
			$cortextoo_posted_on .= '<span class="byline"> ' . $byline . '</span>';
		} else { }


		echo $cortextoo_posted_on; // WPCS: XSS OK.
	}
}


/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
if (!function_exists('cortextoo_entry_footer')) {
	function cortextoo_entry_footer()
	{
		// Hide category and tag text for pages.
		if ('post' === get_post_type()) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list(esc_html__(', ', 'c9' ));
			if ($categories_list && cortextoo_categorized_blog()) {
				printf('<span class="cat-links">' . esc_html__('Posted in %1$s', 'c9' ) . '</span>', $categories_list); // WPCS: XSS OK.
			}
			/* translators: used between list items, there is a space after the comma */
			$tags_list = get_the_tag_list('', esc_html__(', ', 'c9' ));
			if ($tags_list) {
				printf('<span class="tags-links">' . esc_html__('Tagged %1$s', 'c9' ) . '</span>', $tags_list); // WPCS: XSS OK.
			}
		}
		if (!is_single() && !post_password_required() && (comments_open() || get_comments_number())) {
			echo '<span class="comments-link">';
			comments_popup_link(esc_html__('Leave a comment', 'c9' ), esc_html__('1 Comment', 'c9' ), esc_html__('% Comments', 'c9' ));
			echo '</span>';
		}
		edit_post_link(
			sprintf(
				/* translators: %s: Name of current post */
				esc_html__('Edit %s', 'c9' ),
				the_title('<span class="screen-reader-text">"', '"</span>', false)
			),
			'<span class="edit-link">',
			'</span>'
		);
	}
}


/**
 * Returns true if a blog has more than 1 category.
 *
 * @return bool
 */
if (!function_exists('cortextoo_categorized_blog')) {
	function cortextoo_categorized_blog()
	{
		if (false === ($all_the_cool_cats = get_transient('cortextoo_categories'))) {
			// Create an array of all the categories that are attached to posts.
			$all_the_cool_cats = get_categories(array(
				'fields'     => 'ids',
				'hide_empty' => 1,
				// We only need to know if there is more than one category.
				'number'     => 2,
			));
			// Count the number of categories that are attached to the posts.
			$all_the_cool_cats = count($all_the_cool_cats);
			set_transient('cortextoo_categories', $all_the_cool_cats);
		}
		if ($all_the_cool_cats > 1) {
			// This blog has more than 1 category so components_categorized_blog should return true.
			return true;
		} else {
			// This blog has only 1 category so components_categorized_blog should return false.
			return false;
		}
	}
}


/**
 * Flush out the transients used in cortextoo_categorized_blog.
 */
add_action('edit_category', 'cortextoo_category_transient_flusher');
add_action('save_post',     'cortextoo_category_transient_flusher');

if (!function_exists('cortextoo_category_transient_flusher')) {
	function cortextoo_category_transient_flusher()
	{
		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
			return;
		}
		// Like, beat it. Dig?
		delete_transient('cortextoo_categories');
	}
}
