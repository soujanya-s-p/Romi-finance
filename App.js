import './App.css';
import download from './images/download.png';
import Dashboard from './dashboard';
import nft from './NFT';
import earn from './earn';
import buy from './buy';
import referrals from './referrals';
import ecosystem from './ecosystem';
import about from './about';
import React, { Component } from 'react';
import icon11 from './images/icon11.png'
import icon111 from './images/icon111.png'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavActive: false
    };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollThreshold = 100; // Adjust this value as needed
    if (window.scrollY > scrollThreshold) {
      this.setState({ isMenuVisible: false });
    } else {
      this.setState({ isMenuVisible: true });
    }
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isNavActive: !prevState.isNavActive
    }));
  };


  render() {
    const { isNavActive } = this.state;
    const navigateTo = (path) => {
      history.push(path);
    }
    
    return (
      <div className="App">
        <nav className={`navbar ${isNavActive ? "active" : ""}`}>
          <div className="logo">
            <img src={download} alt="Description" className="img1"  /></div>
            <Router>
      <div>
        <button onClick={() => navigateTo("/")}>Home</button>
        <button onClick={() => navigateTo("/dashboard")}>Dashboard</button>
        <button onClick={() => navigateTo("/nft")}>NFT</button>
        <button onClick={() => navigateTo("/earn")}>Earn</button>
        <button onClick={() => navigateTo("/buy")}>Buy</button>
        <button onClick={() => navigateTo("/referrals")}>Referrals</button>
        <button onClick={() => navigateTo("/ecosystem")}>Ecosystem</button>
        <button onClick={() => navigateTo("/about")}>About</button>
      </div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/nft" component={NFT} />
        <Route path="/earn" component={Earn} />
        <Route path="/buy" component={Buy} />
        <Route path="/referrals" component={Referrals} />
        <Route path="/ecosystem" component={Ecosystem} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
          
          <li className="bx1"><a href="#">Trade</a></li>
          <li className='wallet'>
          
            <img src='https://zomi.finance/static/media/ic_wallet_24.a19a6758.svg' className="img2" alt="Wallet" />
            <a href="#">Connect Wallet</a>
          </li>
          <div className='btn2'>
            <button className='btn3'>
              <img className="network-dropdown-icon" src="https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg" alt="Ethereum" />
            </button>
          </div>
          <button className={`menu-button ${isNavActive ? "active" : ""}`} onClick={this.toggleNav}>
            <span className="menu-icon"></span>
          </button>
        </nav>
        <div>
            <div className='Home'>
                <div className='Home2'>
                    <div className="Home-title-sec">
                        <div className='Home-title-sec1'>
                            <div className='Home-title1'>
                                Decentralized
                                Perpetual Exchange
                            </div>
                            <div className="Desc">Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet
                            </div>
                            <a className="Home-btn">Launch Exchange</a>
                        </div>
                        <div className='Home-info-sec'>
                            <div className='Home-info'>
                                <div className='Home-info1'>
                                    <img src='	https://zomi.finance/static/media/ic_trading.2c53815a.svg' className='info1-img' />
                                </div>
                                <div className='home-info1-cont'>
                                    <div className='cont-tittle'>
                                        Total trading Volume
                                    </div>
                                    <div className='cont-info'>
                                        $0
                                    </div>
                                </div>
                            </div>

                            <div className='Home-info'>
                                <div className='Home-info1'>
                                    <img src='https://zomi.finance/static/media/ic_stats.f0a18011.svg' className='info1-img' />
                                </div>
                                <div className='home-info1-cont'>
                                    <div className='cont-tittle'>
                                        Open Interest
                                    </div>
                                    <div className='cont-info'>
                                        $0
                                    </div>
                                </div>
                            </div>


                            <div className='Home-info'>
                                <div className='Home-info1'>
                                    <img src='https://zomi.finance/static/media/ic_totaluser.ae09b310.svg' className='info1-img' />
                                </div>
                                <div className='home-info1-cont'>
                                    <div className='cont-tittle'>
                                        Total Users
                                    </div>
                                    <div className='cont-info'>
                                        0
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
            <div className='home-sec11'>
            <div className='Home-sub-sec'>
                <div className='Home-info-sec1'>
                    <div className='Home-info2'>
                        <div className='Home-info1'>
                            <img src='https://zomi.finance/static/media/ic_liquidity.505b3f30.svg' className='info1-img1' />
                        </div>
                        <div className='home-info1-cont'>
                            <div className='cont-tittle1'>
                                Reduce Liquidation Risks
                            </div>
                            <div className='new-text'>
                                An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.
                            </div>
                        </div>
                    </div>


                    <div className='Home-info2'>
                        <div className='Home-info1'>
                            <img src='https://zomi.finance/static/media/ic_cost.b4a729d3.svg' className='info1-img1' />
                        </div>
                        <div className='home-info1-cont'>
                            <div className='cont-tittle1'>
                                Save on Costs
                            </div>
                            <div className='new-text'>
                                Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.
                            </div>
                        </div>
                    </div>


                    <div className='Home-info2'>
                        <div className='Home-info1'>
                            <img src='https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg' className='info1-img1' />
                        </div>
                        <div className='home-info1-cont'>
                            <div className='cont-tittle1'>
                                Simple Swaps
                            </div>
                            <div className='new-text'>
                                Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="Home-token-card-section">
                <div className="Home-token-card-info">
                    <div className="Home-token-card-info__title">
                        Two tokens create our ecosystem
                    </div>
                    <div className="Home-token-card-options">
                        <div className="Home-token-card-option">
                            <div className="Home-token-card-option-icon">
                                <img src={icon11} alt="mmxBigIcon" width="40px" />
                                $ZOMI
                            </div>
                            <div className="Home-token-card-option-info">
                                <div className="Home-token-card-option-title">
                                    $ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.
                                </div>
                                <div className="Home-token-card-option-apr">
                                    Ethereum APR:
                                    0.00%
                                </div>
                                <div className="Home-token-card-option-action">
                                    <div className="buy">
                                        <a className="default-btn" href="#/buy_ZOMI">Buy</a>
                                    </div>
                                    <a href="https://docs.zomi.financetokenomics/mmx" class="default-btn read-more" target="_blank" rel="noopener noreferrer">Read more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="Home-token-card-section1">
                <div className="Home-token-card-info1">
                    <div className="Home-token-card-options1">
                        <div className="Home-token-card-option1">
                            <div className="Home-token-card-option-icon">
                                <img src={icon111} alt="mmxBigIcon" width="40px" />
                                $ZLP
                            </div>
                            <div className="Home-token-card-option-info">
                                <div className="Home-token-card-option-title">
                                    $ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.
                                </div>
                                <div className="Home-token-card-option-apr">
                                    Ethereum APR:
                                    1,677,395,639.91%
                                </div>
                                <div className="Home-token-card-option-action">
                                    <div className="buy">
                                        <a className="default-btn" href="#/buy_ZOMI">Buy</a>
                                    </div>
                                    <a href="https://docs.zomi.financetokenomics/mmx" class="default-btn read-more" target="_blank" rel="noopener noreferrer">Read more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='Footer'>
            <div>
            <div class="Footer">
                <div class="Footer-wrapper">
                    <div class="Footer-logo">
                    <img src={download} alt="Description" />
                    </div>
                    <div class="Footer-social-link-block">
                        <a class="App-social-link" href="https://twitter.com/zomi.finance" target="_blank" rel="noopener noreferrer">
                            <img src="https://zomi.finance/static/media/ic_twitter.9f35b403.svg" alt="Twitter" />
                        </a>

                        <a class="App-social-link" href="https://zomifinance.medium.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://zomi.finance/static/media/ic_medium.f6051b2e.svg" alt="Twitter" />
                        </a>

                        <a class="App-social-link" href="https://github.com/zomi" target="_blank" rel="noopener noreferrer">
                            <img src="https://zomi.finance/static/media/ic_github.dbd4de8a.svg" alt="Twitter" />
                        </a>

                        <a class="App-social-link" href="https://t.me/zomichat" target="_blank" rel="noopener noreferrer">
                            <img src="	https://zomi.finance/static/media/ic_telegram.af1a4a66.svg" alt="Twitter" />
                        </a>

                        <a class="App-social-link" href="https://discord.gg/senshilabs" target="_blank" rel="noopener noreferrer">
                            <img src="	https://zomi.finance/static/media/ic_discord.be4d716c.svg" alt="Twitter" />
                        </a>
                    </div>

                    <div class="Footer-links">
                        <a class="Footer-link" href="#/terms-and-conditions">Terms and Conditions</a>
                        <a class="Footer-link" href="#/referral-terms">Referral Terms</a>
                        <a target="_blank" href="https://docs.zomi.finance" class="Footer-link" rel="noopener noreferrer">Media Kit</a>
                    </div>
                </div>
            </div>
        </div>

                
            </div>
        </div>
    </div>


        </div>

      </div>
    );
  }
}

export default App;
