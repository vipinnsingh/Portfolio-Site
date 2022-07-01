// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>ERC20 token</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://ethereum.org/en/developers/docs/standards/tokens/erc-20/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vipinnsingh/Solidity/blob/main/ERC20token.sol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Covid19 Certificate</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://covid19.gov.lv/en/covid-19/about-covid-19/digital-covid-19-certificate" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vipinnsingh/Solidity/blob/main/covid19coldchain.sol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>NFT Marketplace</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://ethereum.org/en/nft/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vipinnsingh/Solidity/blob/main/digitalmarketplace.sol" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;