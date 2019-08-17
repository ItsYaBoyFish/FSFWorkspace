console.log('Hello World');


var files = [
  "pavans_first_birthday.mov",
  "owens_asleep_at_the_computer.jpg",
  "michael_fights_a_polar_bear.mp4",
  "nate_road_rage.avi",
  "ruby_skydiving.jpeg",
  "ken_getting_his_black_belt.png",
  "dan_winning_underground_street_race.mov",
  "its_hard_to_come_up_with_file_names.gif",
  "seriously_this_is_taking_too_long.mpg",
  "i_wonder_how_many_of_these_i_should_have.png",
  "probably_a_few_more.avi",
  "nutmeg_is_clawing_my_sneakers_again.mp4",
  "cat_i_will_destroy_you.gif",
  "i_wish_we_had_a_dog.jpeg",
  "stop_looking_at_me_like_that_nutmeg.mpeg",
  "aww_i_cant_hate_you.png",
  "omg_my_sneakers.avi",
  "cat_you_are_the_worst.mp4"
];

var imagesArray = [];
var videoExtensions = [];

for (var i = 0; i < files.length; i++) {
  console.log(`Files at position ${i}: ${files[i]}`);
}


for (var i = 0; i < files.length; i++) {
  if (files[i].includes('.mov') || files[i].includes('.avi') || files[i].includes('.mp4') || files[i].includes('.mpeg') || files[i].includes('.mpg')) {
    videoExtensions.push(files[i]);
    // console.log(`Video Extensions:${videoExtensions}`);
  } else if (files[i].includes('.jpg') || files[i].includes('.gif') || files[i].includes('.png') || files[i].includes('.jpeg')) {
    imagesArray.push(files[i]);
    // console.log(`Image Extensions: ${imagesArray}`);
  }
}
console.log('');
console.log('Video Extensions Array Below:');
console.log(videoExtensions);
console.log('');
console.log('Images Extensions Array');
console.log(imagesArray);