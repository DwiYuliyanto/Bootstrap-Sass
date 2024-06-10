// Slide rekomenadasi
$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

// Form review
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const review = document.getElementById('review').value;

    const card = document.createElement('div');
    card.classList.add('card');

    const reviewName = document.createElement('h3');
    reviewName.textContent = name;
    card.appendChild(reviewName);

    const reviewRating = document.createElement('p');
    reviewRating.innerHTML = 'Rating: ' + '★'.repeat(rating) + '☆'.repeat(5 - rating);
    card.appendChild(reviewRating);

    const reviewText = document.createElement('p');
    reviewText.textContent = review;
    card.appendChild(reviewText);

    document.getElementById('reviews').appendChild(card);

    document.getElementById('reviewForm').reset();
});
