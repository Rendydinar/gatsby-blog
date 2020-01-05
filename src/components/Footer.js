// Footer Compoent
import React from 'react'

const Footer = () => (
	<div className="site-footer">
		<h4 className="text-center">
			Unkriswina Informers
		</h4>
		<p className="text-center"> Ikuti kami melalui sosial media</p>
		<div className="footer-social-links text-center">
			<ul className="social-links-list">
				<li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
					<i className="fab fa-facebook-f fa-2x" />		
				</a></li>
				<li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="twitter">
					<i className="fab fa-twitter fa-2x" />				
				</a></li>
				<li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="instagram">
					<i className="fab fa-instagram fa-2x" />				
				</a></li> 
				<li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="google">
					<i className="fab fa-google fa-2x" />				
				</a></li>
				<li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="likendin">
					<i className="fab fa-likendin fa-2x" />			
				</a></li>
			</ul>
		</div>
		<div className="copyright">
		    <div class="container-fluid">
		      <p>
			    Copyright &copy; {new Date().getFullYear()} <span style={{color: '#00B5D4'}}>Unkriswina Informers</span>. All Rights Reserved
			  </p>
		    </div>

		</div>
	</div>
)

export default Footer

