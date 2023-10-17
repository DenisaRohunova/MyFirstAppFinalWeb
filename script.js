let currentPhoto = 0;

let imagesData = [
    {
        photo: 'fox1.jpg',
        title: 'Fox',
        description: 'The fox is a nimble member of the canine family, distinguished by its pointed ears, bushy tail, and a coat that can vary from reddish-brown to white or black, depending on the species. Known for its cunning and agility, it thrives in diverse habitats ranging from forests to suburban areas, often symbolizing intelligence and slyness in folklore and popular culture.'
    },
    {
        photo: 'bear.jpg',
        title: 'Bear',
        description: 'The bear is a robust and powerful member of the mammalian order, characterized by its broad shoulders, dense fur, and often a lumbering gait. Coats can range from jet black to brown, golden, or even snowy white, depending on the species. Residing in varied habitats like dense forests, mountains, or icy tundras, bears are often revered for their strength and wisdom, frequently symbolizing courage and leadership in folklore and popular culture.'
    },
    {
        photo: 'owl.jpg',
        title: 'Owl',
        description: 'The owl is a mysterious and enigmatic member of the avian kingdom, distinguished by its round face, large, forward-facing eyes, and a nocturnal lifestyle. Its feathers range from muted browns and grays to striking whites or even deep blacks, depending on the species. Found in diverse habitats such as forests, deserts, and urban areas, owls are renowned for their keen senses and silent flight, often symbolizing wisdom and intuition in folklore and popular culture.'
    },

    {
        photo: 'eagle.jng.jpg',
        title: 'Eagle',
        description: 'The eagle is a majestic and formidable member of the avian world, defined by its sharp talons, powerful beak, and broad wingspan. Exhibiting a range of colors from deep browns and golds to snowy whites, depending on the species, it often soars at impressive heights, surveying vast terrains below. Inhabiting regions from mountains to coastlines, eagles are emblematic of freedom and prowess, consistently representing strength and vision in folklore and popular culture.'
    },
    {
        photo: 'tiger.jpg',
        title: 'Tiger',
        description: 'The tiger is a regal and fierce member of the big cat family, recognized by its striking striped pattern, which can range from deep blacks to burnt oranges and whites, depending on the subspecies. Boasting powerful muscles and razor-sharp claws, it prowls diverse habitats from dense jungles to open grasslands. The tiger, with its piercing gaze and stealthy movements, stands as a symbol of power and majesty, often representing courage and ferocity in folklore and popular culture.'
    },
    {
        photo: 'monkey.jpg',
        title: 'Monkey',
        description: 'The monkey is an agile and playful member of the primate order, characterized by its prehensile tail, dexterous hands, and expressive face. Exhibiting a vast spectrum of sizes and fur colors, from earthy browns to bright golds depending on the species, it often leaps and swings effortlessly between trees in environments ranging from dense rainforests to mountainous regions. The monkey, known for its curiosity and cleverness, has long been a symbol of wit and mischief in folklore and popular culture.'
    },

    {
        photo: 'giraffe.jpg',
        title: 'Giraffe',
        description: 'The giraffe is a distinct and elegant member of the ungulate family, immediately recognizable by its towering neck and mosaic-like patterns that adorn its skin, which can vary from tans to oranges set against whites or creams depending on the subspecies. With long legs and a graceful gait, it traverses the open savannas and woodlands of Africa, reaching up to graze on treetop foliage that other herbivores cannnot access. '
    }
];
    
    


let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    
    $('.thumbnail').removeClass('active');
    $(`.thumbnail[data-number=${photoNumber}]`).addClass('active');
}



$('#right-arrow').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
});


loadPhoto(currentPhoto);

imagesData.forEach((image, index) => {
    $('#thumbnails').append(
        `<div class="thumbnail" data-number="${index}">
             <img src="${image.photo}" alt="${image.title}">
             <div class="thumbnail-title">${image.title}</div>
         </div>`
    );
});

$('.thumbnail').click((event) => {
    let index = $(event.currentTarget).attr('data-number');
    currentPhoto = parseInt(index);
    loadPhoto(currentPhoto);
});


