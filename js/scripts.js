$( document ).ready(function() {
    var galleryItem = {};
    galleryItem['bender'] = ['<span class="label label-default">3D</span>Bender', '<div class="row"><div class="col-md-9"><img src="img/gallery/newBender.jpg" class="img-responsive" alt="Bender"><img src="img/gallery/newBender2.jpg" class="img-responsive" alt="Bender"><img src="img/gallery/newBender3.jpg" class="img-responsive" alt="Bender"></div><div class="col-md-3"><h4>Program used: Maya</h4> <p>Bender in the Planet Express employee lounge based on Futurama.</p></div></div>']

    galleryItem['iktomi'] = ['<span class="label label-default">Game</span>Iktomi&#39;s Web', '<div class="row"><div class="col-md-9"><img src="img/gallery/screen2.jpg" class="img-responsive" alt="Iktomi"><img src="img/gallery/screen3.jpg" class="img-responsive" alt="Iktomi"><img src="img/gallery/screen6.jpg" class="img-responsive" alt="Iktomi"><img src="img/gallery/screen4.jpg" class="img-responsive" alt="Iktomi"><img src="img/gallery/screen5.jpg" class="img-responsive" alt="Iktomi"></div><div class="col-md-3"><h4>Programs used: Unity, Maya, Photoshop</h4> <p>Solo art game created for exhibition in the Senior BFA Gallery at Towson University.<br> <a href="https://katrinaschmelter.itch.io/iktomis-web" class="btn btn-back" style="margin-bottom:30px" target="_blank" onclick="trackLinks()">Download Here</a></p></div></div>']

    galleryItem['typewriter'] = ['<span class="label label-default">Web</span>The Color Typewriter', '<div class="row"><div class="col-md-9"><img src="img/gallery/ColorTypewriter.jpg" class="img-responsive" alt="Color Typewriter"></div><div class="col-md-3">Paint a picture by typing on your keyboard with this JavaScript based typewriter. It was featured in this article on <a href="https://www.sitepoint.com/on-our-radar-creativity-php-keyboards/" target="_blank"  onclick="trackLinks()">SitePoint</a> <p>Try it out <a href="http://www.colortypewriter.com" target="_blank" onclick="trackLinks()">here</a>.</p></div></div>']

    galleryItem['dscott'] = ['<span class="label label-default">Web</span>D Scott Concrete', '<div class="row"><div class="col-md-9"><img src="img/gallery/dscottconcrete.jpg" class="img-responsive" alt="D Scott Concrete"></div><div class="col-md-3">Responsive Wordpress website using a custom-made theme built using Bootstrap.<p>Visit <a href="http://www.dscottconcrete.com" target="_blank" onclick="trackLinks()">here</a>.</p></div></div>']

    galleryItem['gallerypaws'] = ['<span class="label label-default">Web</span>Gallery Paws', '<div class="row"><div class="col-md-9"><img src="img/gallery/gallerypaws.jpg" class="img-responsive" alt="Gallery Paws"></div><div class="col-md-3">Responsive Bootstrap website for Gallery Paws, a custom pet portrait online store. <p>Visit <a href="http://www.gallerypaws.com" target="_blank" onclick="trackLinks()">here</a>.</p></div></div>']

    galleryItem['glow-nuts'] = ['<span class="label label-default">Web</span>Glow-Nuts', '<div class="row"><div class="col-md-9"><img src="img/gallery/glow-nuts.jpg" class="img-responsive" alt="Glow-Nuts"></div><div class="col-md-3">One page site for the Hazmat Apparel collection of Elliotts Sportswear. It uses Bootstrap and Datatables. All products link back to the main business site for checkout.<p>Visit <a href="http://www.glow-nuts.com" target="_blank" onclick="trackLinks()">here</a>.</p></div></div>']

    galleryItem['mentalcase'] = ['<span class="label label-default">Game</span>The Mental Case', '<div class="row"><div class="col-md-9"><img src="img/gallery/mentalcase3.jpg" class="img-responsive" alt="Mental Case"><img src="img/gallery/mental1.jpg" class="img-responsive" alt="Mental Case"><img src="img/gallery/mental2.jpg" class="img-responsive" alt="Mental Case"><img src="img/gallery/mental3.jpg" class="img-responsive" alt="Mental Case"><img src="img/gallery/mental4.jpg" class="img-responsive" alt="Mental Case"></div><div class="col-md-3"><h4>Group Project Roles: Project Leader, Programmer, UI design, puzzle/level design</h4> <p>The Mental Case is a technical demo for a game about finding your marbles and escaping the insane asylum. It features puzzle solving, stealth, and horror elements.<br> <a href="https://katrinaschmelter.itch.io/the-mental-case" class="btn btn-back" style="margin-bottom:30px" target="_blank" onclick="trackLinks()">Download Here</a></p></div></div>']

    galleryItem['mdlabwagon'] = ['<span class="label label-default">3D Printing</span>Business Card Wagon', '<div class="row"><div class="col-md-9"><img src="img/gallery/mdlabwagon.jpg" class="img-responsive" alt="Wagon"><div class="sketchfab-embed-wrapper"><iframe width="100%" height="480" src="https://sketchfab.com/models/c804349849cb4645a00d87fecc342df4/embed" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe></div></div><div class="col-md-3"><h4>Program used: Maya</h4><p>Object prototype developed for Maryland Legal Aid. The business card holder is based on red wagons used by the organization and features a moveable handle and wheels. Printed using my personal Da Vinci Pro 3D printer.</p></div></div>']

    galleryItem['radioactive'] = ['<span class="label label-default">Animation</span>Radioactive', '<div class="row"><div class="col-md-9"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.vimeo.com/video/192026027"></iframe></div></div><div class="col-md-3"><p>Puppet animation made in After Effects.</p></div></div>']

    galleryItem['rockon'] = ['<span class="label label-default">Animation</span>Rock On', '<div class="row"><div class="col-md-9"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.vimeo.com/video/127234074"></iframe></div></div><div class="col-md-3"><p>3D character animation made in Blender.</p></div></div>']

    galleryItem['tetrisdance'] = ['<span class="label label-default">Animation</span>Rock On', '<div class="row"><div class="col-md-12"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.vimeo.com/video/189104083"></iframe></div></div></div>']

    galleryItem['travellinggnome'] = ['<span class="label label-default">Animation</span>The Travelling Gnome', '<div class="row"><div class="col-md-9"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.vimeo.com/video/218354465"></iframe></div></div><div class="col-md-3"><p>Excerpt from The Travelling Gnome, a continuous animation made by four artists. Each artist created a 30 second segment that blends seamlessly with the next. Music by Raymond Ha.</p></div></div>']

    galleryItem['chickenegg'] = ['<span class="label label-default">2D</span>I Will Not Hatch', '<div class="row"><div class="col-md-9"><img src="img/gallery/shelsilverstein_iwillnothatch.jpg" class="img-responsive" alt="Chicken Egg Illustration"></div><div class="col-md-3"><p>Illustration for the Shel Silverstein poem, "I Will Not Hatch".</p></div></div>']

    galleryItem['ravenhome'] = ['<span class="label label-default">3D</span>Raven&#39;s Home', '<div class="row"><div class="col-md-9"><img src="img/gallery/3D-ravenhome.jpg" class="img-responsive" alt="Bender"><img src="img/gallery/3D-ravenhome2.jpg" class="img-responsive" alt="Bender"></div><div class="col-md-3"><h4>Program used: Maya</h4> <p>Interior view of a Baltimore apartment in inhabited by a raven.</p></div></div>']

    galleryItem['microevent'] = ['<span class="label label-default">2D</span>Micro-Event', '<div class="row"><div class="col-md-12"><img src="img/gallery/comic.jpg" class="img-responsive" alt="Micro Event"></div></div>']

    galleryItem['cataglottism'] = ['<span class="label label-default">2D</span>Cataglottism', '<div class="row"><div class="col-md-12"><img src="img/gallery/cataglottism.jpg" class="img-responsive" alt="cataglottism"></div></div>']

    galleryItem['mib'] = ['<span class="label label-default">2D</span>Men in Black Movie Poster', '<div class="row"><div class="col-md-9"><img src="img/gallery/meninblack2.jpg" class="img-responsive" alt="men in black"></div><div class="col-md-3"><p>Movie Poster for Men in Black.</p></div></div>']

    galleryItem['penguin'] = ['<span class="label label-default">2D</span>Penguinzilla', '<div class="row"><div class="col-md-9"><img src="img/gallery/giantpenguin.jpg" class="img-responsive" alt="penguinzilla"></div><div class="col-md-3"><p>1st place winner in <a href="http://www.freakingnews.com/Penguin-Godzilla-Pictures-134812.asp" target="_blank"  onclick="trackLinks()">Penguin Awareness Day</a> on FreakingNews.</p></div></div>']

    galleryItem['lilapso'] = ['<span class="label label-default">Animation</span>Lilapso', '<div class="row"><div class="col-md-12"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.vimeo.com/video/157523589"></iframe></div></div></div>']


    $('#lightbox').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var project = button.data('project')
 // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').html(galleryItem[project][0])
  modal.find('.modal-body').html(galleryItem[project][1])
  trackModals(project);
})
});

$('#aboutMe').on('show.bs.modal', function (event) {
trackModals('about');
});

function trackModals(path) {
  //  ga('send', 'pageview', '/project/' + path + '/');
    ga('send', {
  hitType: 'event',
  eventCategory: 'modal',
  eventAction: path
});
}
function trackLinks(event) {
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: event.target.href,
    transport: 'beacon'
  });
}
