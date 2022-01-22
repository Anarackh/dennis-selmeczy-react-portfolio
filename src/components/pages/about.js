import React from "react";
import aboutFeaturedImage from "../../../static/assets/images/about/about_featured_img.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
            className="left-column" 
            style={{
                background: "url(" + aboutFeaturedImage + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "calc(100vh - 83px)"
            }}
            />

            <div className="right-column">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo est justo, in sodales metus blandit a. Praesent eget dapibus purus. Sed gravida nulla posuere finibus efficitur. Donec blandit nisi arcu, id egestas enim maximus id. Ut tincidunt velit odio, id facilisis ligula sodales sed. Aliquam porta, augue ut sollicitudin congue, lacus quam pellentesque ipsum, id tempus massa dui sed nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>In hac habitasse platea dictumst. Nullam aliquet quis magna at tempus. Duis accumsan consectetur quam, non laoreet nisi cursus eu. Donec suscipit, ex luctus rhoncus finibus, ligula justo sollicitudin tellus, quis aliquet nibh quam ornare erat. Phasellus sollicitudin nunc mi, in imperdiet lorem bibendum eu. Vestibulum id nibh diam. Phasellus ac magna neque. Nunc at varius est. Suspendisse potenti.</p>
                <p>Morbi lacus dui, tempus non euismod ac, aliquet et diam. Duis suscipit purus eu mattis dignissim. Vestibulum ultrices erat sed purus dictum mattis scelerisque vitae lacus. Aenean posuere lacus ut efficitur ullamcorper. Pellentesque interdum felis sollicitudin lacus faucibus, nec luctus odio tempor. Fusce arcu eros, feugiat sed leo non, tempus mattis leo. Aenean blandit massa et imperdiet mattis. Phasellus varius a nulla quis tincidunt. In bibendum diam sed dui faucibus porttitor. Praesent eleifend eros eget pellentesque luctus. Nulla commodo, augue vel dignissim sollicitudin, eros neque commodo felis, quis ullamcorper odio justo et metus.</p>
                <p>Fusce neque enim, hendrerit eu ante ac, ultricies accumsan purus. Fusce ut imperdiet justo. Duis finibus felis ex, in rutrum felis maximus in. Sed tincidunt at nunc et porta. Morbi non porttitor turpis. Vestibulum lobortis volutpat volutpat. Ut non libero at lorem tincidunt convallis. Suspendisse tristique justo non libero dignissim tristique. Quisque euismod elit sed tellus pharetra scelerisque. Aenean non diam et odio consectetur ultrices. Praesent congue tempor ipsum sed maximus. Suspendisse tristique dapibus suscipit. Suspendisse bibendum ipsum ac cursus interdum.</p>
                {/* <p>Donec sed dignissim elit. Donec elementum pellentesque nisi, nec viverra augue interdum at. Nullam tristique at ante quis volutpat. Vestibulum sed ipsum at elit laoreet volutpat in eu ex. Cras ut lorem non velit tempus posuere. Proin gravida tortor et mauris suscipit, sed dapibus lectus volutpat. Mauris congue fringilla pellentesque. Mauris nulla nisi, consectetur sollicitudin fermentum ut, mollis eget dolor. Duis rhoncus sollicitudin purus eget volutpat. In hac habitasse platea dictumst.</p> */}
            </div>
        </div>
    );
}