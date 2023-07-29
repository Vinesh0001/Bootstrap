const photus = `
    <div class="posts">
        <div class="post">
            <img src="Images/posts/post (1).jpg" alt="">
            </></div><div class="post">
                <img src="Images/posts/post (2).jpg" alt="">
                </></div><div class="post">
                <img src="Images/posts/post (3).jpg" alt="">
                </></div><div class="post">
                <img src="Images/posts/post (4).jpg" alt="">
                </></div><div class="post">
                <img src="Images/posts/post (5).jpg" alt="">
                </></div></>
    </div>

`;

const pinged = `
    <div class="posts">
        <div class="post">
            <img src="Images/tags/tag (2).jpg" alt="">
            </></div><div class="post">
                <img src="Images/tags/tag (1).jpg" alt="">
                </></div><div class="post">
                <img src="Images/tags/tag (3).jpg" alt="">
                </></div><div class="post">
                <img src="Images/tags/tag (4).jpg" alt="">
                </></div><
    </div>

`;


const rills = `
                <div class="reels">

                    <div class="reel">
                        <video src="Images/2.mp4"></video>
                        <img src="Images/playsw.png" alt="">
                        <span>40.14 K</span>
                    </div>
                    <div class="reel">
                        <video src="Images/2.mp4"></video>
                        <img src="Images/playsw.png" alt="">
                        <span>40.14 K</span>
                    </div>
                    <div class="reel">
                        <video src="Images/2.mp4"></video>
                        <img src="Images/playsw.png" alt="">
                        <span>40.14 K</span>
                    </div>
                    <div class="reel">
                        <video src="Images/2.mp4"></video>
                        <img src="Images/playsw.png" alt="">
                        <span>40.14 K</span>
                    </div>

                </div>
`;

/*const lin1 = `
<div class="black1"></div>
`;

const lin2 = `
<div class="black2"></div>
`;

const lin3 = `
<div class="black3"></div>
`;
*/

function showContent(contentType) {
    var contentElement = document.getElementById('content');
    var content;

    switch (contentType) {
        case 'photu':
            content = photus;
            break;
        case 'reels':
            content = rills;
            break;
        case 'pings':
            content = pinged;
            break;
        default:
            content = photus;
    }

    contentElement.innerHTML = content;
}


