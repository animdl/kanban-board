<script>
	let count = 0;

	// reactive statement that runs when count changes
	//$: {
	//    console.log(count)
	//}

	// reactive statements can also be without braces
	//$: console.log(count)

	// reactive statements can also contain logic
	//$: count > 10 ? console.log('count is greater than 10') : console.log('count is less than 10')

    // reactive declarations only update when the value changes
    //$: double = count * 2
</script>

<div class="text-white text-center">
	<div>
		This is a trello clone - {count}
	</div>

    <!-- call reactive declarations the same way as normal statements --> 
    <!-- <div>Double: {double}</div> -->

	<!-- on click function can be multi-line with braces -->
	<div>
		<button
			on:click={() => {
				count += 2;
			}}
		>
			Increment
		</button>
	</div>

	<!-- on click function can be single-line without braces -->
	<div>
		<button on:click={() => (count = 0)}> Clear </button>
	</div>
</div>
