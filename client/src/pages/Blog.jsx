import React from "react";
import { useParams } from "react-router-dom";

import testImg from "../assets/image/blog/blog-cover-img.jpg";

import Helmet from "../components/Helmet";
import Banner from "../components/Banner";

function Blog(props) {
	const slug = useParams();
	console.log(slug);
	var blog;

	return (
		<Helmet title="Blog">
			<div className="blog">
				<Banner img={testImg} quote="hi mn" />
				<div className="blog__timestamp">Huế 14/8/2022</div>
				<div className="blog__content">
					<div className="blog__content__title">
						Đầm sen cùng các hot gơ Dạ Lê nha cả nhà iu
					</div>
					<div className="blog__content__body">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
						officiis ipsum dolores amet reiciendis error cum non molestiae, rem
						nostrum perspiciatis inventore, nulla ducimus nemo hic. Doloremque
						blanditiis ullam quisquam impedit inventore iste illo laboriosam
						iure cum velit ducimus fuga accusantium architecto consequatur
						quidem et quaerat, quam beatae! Quibusdam nam quisquam laboriosam
						aperiam. Modi quasi ipsam repudiandae voluptates ea voluptatem
						dolores eius iste, sunt molestias! Sequi, fugiat! Earum ab adipisci
						eius nam debitis? Et delectus excepturi ipsam. Obcaecati nulla
						suscipit doloremque et accusantium.
						<br /> Nisi enim deleniti, perspiciatis esse nesciunt autem quis
						sunt explicabo aspernatur odit, ratione labore soluta a
						necessitatibus consequatur saepe. Cupiditate est eligendi delectus
						sit ut iure architecto nisi rerum. Veniam sit eius cupiditate sequi
						facilis cum labore accusamus quia, inventore ea quasi libero odio in
						corrupti aliquid reiciendis animi quae fugit ratione sapiente
						debitis voluptas officia nam non. Dolores consectetur quia
						accusantium. <br />
						Inventore quidem magnam illum suscipit unde, eveniet, beatae sint
						voluptate quas dicta doloremque sequi saepe vel laborum non
						similique omnis officiis quaerat maxime quibusdam ullam, rem vero
						modi nesciunt. Dolorum aspernatur ut quisquam voluptas, ad et autem
						optio ab quasi! Quod magni nemo ut recusandae rem? Rerum cum quas
						atque. Laudantium facere provident soluta praesentium aliquid. Nam
						praesentium dolorem beatae assumenda, voluptas sunt eius! Laborum
						necessitatibus nobis eaque repellat repellendus ea repudiandae error
						praesentium. Vel sint similique ipsa, delectus enim nesciunt dolores
						nemo minus? Voluptatum accusamus iure error repellendus nesciunt
						dolorum odio molestiae! Possimus, facilis. Vero odio aliquid, veniam
						placeat nobis est sapiente eaque at excepturi cum atque delectus
						earum pariatur quaerat, molestiae rerum voluptate? Ab, fugiat
						reiciendis. Deserunt facilis voluptates praesentium molestiae error
						nesciunt possimus, delectus incidunt! Doloremque enim repudiandae
						ipsa explicabo distinctio magni fugiat assumenda facilis quaerat eos
						cumque ea et doloribus laborum saepe nisi tempora vel nostrum quos
						similique, nemo tempore. Molestiae et temporibus esse veniam! Esse
						ullam aliquam expedita, labore saepe, tempora ratione nulla ab unde
						enim consectetur architecto eius adipisci molestiae reprehenderit?
						<br /> Laboriosam hic impedit sapiente pariatur velit omnis placeat
						at eum dignissimos quibusdam voluptatibus unde nemo, praesentium
						ipsum nihil dolores atque facilis fugit temporibus! Incidunt, atque.
						Maxime voluptate reiciendis hic quas illum corrupti, eligendi atque
						adipisci praesentium tempore quisquam possimus nostrum aut nulla eos
						sapiente architecto. Corrupti enim repellat, deserunt ab quo
						recusandae aut excepturi doloremque ad debitis molestiae vitae unde
						blanditiis voluptatibus in cum nemo perspiciatis, quisquam numquam!
						Cum expedita enim pariatur rerum quaerat natus doloribus doloremque
						similique.
					</div>
					<div className="blog__content__signature">Hương Lé thân iu</div>
				</div>
			</div>
		</Helmet>
	);
}

export default Blog;
