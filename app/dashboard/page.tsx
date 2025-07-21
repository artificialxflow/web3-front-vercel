// Lendora Dashboard Page (Cloned from static/dashboard.html)
// Assets: All icons via react-icons, images from /public
// Original static file: static/dashboard.html
// Figma: (add link if available)

"use client";
import { useState } from "react";
import {
  FaBars,
  FaWallet,
  FaChartPie,
  FaChartLine,
  FaPercentage,
  FaArrowDown,
  FaArrowUp,
  FaRedo,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaEthereum,
  FaBitcoin,
  FaDollarSign,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaInfoCircle,
  FaCoins,
  FaRegCircle,
} from "react-icons/fa";
import {
  SiEthereum,
  SiBinance,
  SiPolygon,
  SiTether,
  SiBitcoin,
  SiChainlink,
  SiDogecoin,
} from "react-icons/si";
import Link from "next/link";
import { TOKENS } from "../../static/Tokens";
import { useModal } from "connectkit";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import SupplyModal from "./SupplyModal";

const NETWORKS = [
  {
    id: 1,
    name: "Ethereum",
    symbol: "ETH",
    icon: <SiEthereum color="#627eea" size={22} />,
  },
  {
    id: 56,
    name: "BNB Chain",
    symbol: "BNB",
    icon: <SiBinance color="#f3ba2f" size={22} />,
  },
  {
    id: 137,
    name: "Polygon",
    symbol: "MATIC",
    icon: <SiPolygon color="#8247e5" size={22} />,
  },
  {
    id: 43114,
    name: "Avalanche",
    symbol: "AVAX",
    icon: <FaRegCircle color="#e84142" size={22} />,
  },
  {
    id: 42161,
    name: "Arbitrum",
    symbol: "ETH",
    icon: <FaCoins color="#28a0f0" size={22} />,
  },
  {
    id: 10,
    name: "Optimism",
    symbol: "ETH",
    icon: <FaCoins color="#ff0420" size={22} />,
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [networkModal, setNetworkModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(NETWORKS[0]);
  const [supplyModal, setSupplyModal] = useState<{show: boolean, assetName: string, assetSymbol: string} | null>(null);

  const TOKEN_ICONS = {
    ETH: <SiEthereum color="#627eea" size={22} />,
    USDT: <SiTether color="#26a17b" size={22} />,
    USDC: <FaDollarSign color="#2775ca" size={22} />,
    DAI: <FaDollarSign color="#f5ac37" size={22} />,
    BTC: <SiBitcoin color="#f7931a" size={22} />,
    LINK: <SiChainlink color="#2a5ada" size={22} />,
    UNI: <FaCoins color="#ff007a" size={22} />,
    DOGE: <SiDogecoin color="#c2a633" size={22} />,
    AAVE: <FaCoins color="#b6509e" size={22} />,
    LDO: <FaCoins color="#00a3ff" size={22} />,
    BNB: <SiBinance color="#f3ba2f" size={22} />,
    MATIC: <SiPolygon color="#8247e5" size={22} />,
    AVAX: <FaRegCircle color="#e84142" size={22} />,
  };

  const { setOpen } = useModal();
  const { address, isConnected } = useAccount();
  const { chains, switchChain } = useSwitchChain();

  // Format address to show first 6 and last 4 characters
  const formatAddress = (addr: string) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="min-vh-100 bg-light d-flex">
      {/* Sidebar */}
      <aside
        className={`bg-white p-4 shadow-lg position-fixed h-100 d-flex flex-column ${
          sidebarOpen ? "d-block" : "d-none d-lg-flex"
        }`}
        style={{ width: 260, zIndex: 1030 }}
      >
        <div className="d-flex align-items-center mb-4">
          <span className="h4 fw-bold text-primary">Lendora</span>
        </div>
        <div className="mb-3">
          <div className="text-uppercase text-secondary small fw-bold mb-2">
            Main
          </div>
          <Link
            href="#"
            className="d-flex align-items-center mb-2 px-3 py-2 rounded lendora-nav nav-link active"
          >
            <FaChartPie className="me-2" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="d-flex align-items-center mb-2 px-3 py-2 rounded lendora-nav nav-link"
          >
            <FaWallet className="me-2" />
            My Wallet
          </Link>
          <Link
            href="#"
            className="d-flex align-items-center mb-2 px-3 py-2 rounded lendora-nav nav-link"
          >
            <FaChartLine className="me-2" />
            Transactions
          </Link>
        </div>
        <div className="mb-3">
          <div className="text-uppercase text-secondary small fw-bold mb-2">
            Loans
          </div>
          <Link
            href="#"
            className="d-flex align-items-center mb-2 px-3 py-2 rounded lendora-nav nav-link"
          >
            <FaArrowDown className="me-2" />
            Apply for Loan
          </Link>
          <Link
            href="#"
            className="d-flex align-items-center mb-2 px-3 py-2 rounded lendora-nav nav-link"
          >
            <FaChartLine className="me-2" />
            Active Loans
          </Link>
          <Link
            href="#"
            className="d-flex align-items-center mb-2 px-3 py-2 rounded lendora-nav nav-link"
          >
            <FaRedo className="me-2" />
            Loan History
          </Link>
        </div>
        <div className="mb-3">
          <div className="text-uppercase text-secondary small fw-bold mb-2">
            Account
          </div>
          <Link
            href="#"
            className="d-flex align-items-center mb-2 px-3 py-2 rounded lendora-nav nav-link"
          >
            <FaUser className="me-2" />
            Profile
          </Link>
          <Link
            href="#"
            className="d-flex align-items-center mb-2 px-3 py-2 rounded lendora-nav nav-link"
          >
            <FaCog className="me-2" />
            Settings
          </Link>
          <Link
            href="#"
            className="d-flex align-items-center mb-2 px-3 py-2 rounded lendora-nav nav-link"
          >
            <FaQuestionCircle className="me-2" />
            Help & Support
          </Link>
        </div>
        <div className="mt-auto pt-4">
          <Link
            href="#"
            className="d-flex align-items-center px-3 py-2 rounded lendora-nav nav-link"
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </Link>
        </div>
      </aside>
      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      {/* Main Content */}
      <main className="lendora-main flex-grow-1 p-4">
        {/* Topbar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button
            className="btn btn-link d-lg-none text-secondary fs-3 p-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
          <div
            className="d-none d-sm-block position-relative"
            style={{ maxWidth: 260 }}
          >
            <input
              type="text"
              className="form-control rounded-pill ps-5"
              placeholder="Search..."
            />
            <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary">
              <FaSearch />
            </span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link text-secondary">
              <FaBell />
            </button>
            <button className="btn btn-link text-secondary">
              <FaEnvelope />
            </button>
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              alt="User Avatar"
              className="rounded-circle"
              width={40}
              height={40}
            />
          </div>
        </div>
        {/* Main Header */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4 gap-2">
          <h2 className="fw-bold mb-0">Dashboard</h2>
          <div className="d-flex gap-2 align-items-center">
            <button
              className="btn btn-outline-secondary d-flex align-items-center"
              onClick={() => setNetworkModal(true)}
            >
              <span style={{ fontSize: 22, marginRight: 8 }}>
                {selectedNetwork.icon}
              </span>
              {selectedNetwork.name}
            </button>
            <button
              className="btn btn-primary d-flex align-items-center"
              onClick={handleClick}
            >
              <FaWallet className="me-2" />
              {isConnected ? formatAddress(address || "") : "Connect Wallet"}
            </button>
          </div>
        </div>
        {/* Network Modal */}
        {networkModal && (
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            style={{ background: "rgba(0,0,0,0.4)", zIndex: 1050 }}
            onClick={() => setNetworkModal(false)}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Select a Network</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setNetworkModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <ul className="list-group mb-4">
                    {NETWORKS.map((net) => (
                      <li
                        key={net.id}
                        className={`list-group-item d-flex align-items-center ${
                          selectedNetwork.id === net.id ? "active" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setSelectedNetwork(net);
                          switchChain({ chainId: net.id });
                        }}
                      >
                        <span className="me-3">{net.icon}</span>
                        <span className="fw-bold">{net.name}</span>
                        <span className="ms-auto text-secondary">
                          {net.symbol}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Wallet Alert */}
        {!isConnected && (
          <div
            className="alert alert-info d-flex align-items-center mb-4"
            role="alert"
          >
          <FaInfoCircle className="me-3 fs-4" />
          <div>
            <div className="fw-bold">Your wallet is not connected!</div>
            <div className="small">
              Please connect your wallet to manage your funds.
            </div>
            </div>
          </div>
        )}
        {/* Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="lendora-card p-4 d-flex flex-column align-items-start">
              <div className="d-flex justify-content-between w-100 mb-2">
                <span className="text-secondary fw-semibold">Your Assets</span>
                <FaChartPie className="fs-4 text-success" />
              </div>
              <div className="display-6 fw-bold">$12,345.67</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="lendora-card p-4 d-flex flex-column align-items-start">
              <div className="d-flex justify-content-between w-100 mb-2">
                <span className="text-secondary fw-semibold">
                  Available Loan
                </span>
                <FaChartLine className="fs-4 text-primary" />
              </div>
              <div className="display-6 fw-bold">$50,000.00</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="lendora-card p-4 d-flex flex-column align-items-start">
              <div className="d-flex justify-content-between w-100 mb-2">
                <span className="text-secondary fw-semibold">
                  Interest Rate
                </span>
                <FaPercentage className="fs-4 text-danger" />
              </div>
              <div className="display-6 fw-bold">5.25%</div>
            </div>
          </div>
        </div>
        {/* Supported Assets & Recent Activity */}
        <div className="row g-4 mb-4">
          <div className="col-lg-8">
            <div className="lendora-card p-4 mb-4">
              <h5 className="fw-bold mb-3">Supported Assets</h5>
              <table className="table align-middle">
                <thead>
                  <tr className="text-secondary">
                    <th>Asset</th>
                    <th>APY</th>
                    <th>Wallet</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {(TOKENS[selectedNetwork.id] || []).map((token) => (
                    <tr>
                      <td className="fw-semibold">
                        <span className="me-2">
                          {TOKEN_ICONS[
                            token.symbol as keyof typeof TOKEN_ICONS
                          ] || <FaDollarSign size={22} />}
                        </span>
                        {token.name}
                      </td>{" "}
                      <td className="text-success fw-semibold">3.5%</td>
                      <td className="fw-semibold">{token.symbol}</td>
                      <td>
                        <button className="btn btn-success btn-sm">
                          Supply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="lendora-card p-4 mb-4">
              <h5 className="fw-bold mb-3">Recent Activity</h5>
              <ul className="list-unstyled mb-0">
                <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                  <div className="d-flex align-items-center">
                    <FaArrowDown className="me-2 text-success" />
                    <div>
                      <div className="fw-semibold">Asset Deposit</div>
                      <div className="text-secondary small">July 4, 2025</div>
                    </div>
                  </div>
                  <span className="text-success fw-bold">+$2,000.00</span>
                </li>
                <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                  <div className="d-flex align-items-center">
                    <FaArrowUp className="me-2 text-danger" />
                    <div>
                      <div className="fw-semibold">Loan Request</div>
                      <div className="text-secondary small">July 3, 2025</div>
                    </div>
                  </div>
                  <span className="text-danger fw-bold">-$1,000.00</span>
                </li>
                <li className="d-flex justify-content-between align-items-center py-2">
                  <div className="d-flex align-items-center">
                    <FaRedo className="me-2 text-primary" />
                    <div>
                      <div className="fw-semibold">Loan Repayment</div>
                      <div className="text-secondary small">July 5, 2025</div>
                    </div>
                  </div>
                  <span className="fw-bold">+$500.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* How It Works & Testimonials */}
        <div className="row g-4 mb-4">
          <div className="col-lg-8">
            <div className="lendora-card p-4 mb-4">
              <h5 className="fw-bold mb-3">How It Works</h5>
              <div className="row text-center g-3">
                <div className="col-6 col-md-4">
                  <div className="d-flex flex-column align-items-center">
                    <span
                      className="d-flex align-items-center justify-content-center mb-2 bg-primary text-white fw-bold"
                      style={{
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                        fontSize: 22,
                      }}
                    >
                      <FaWallet />
                    </span>
                    <div className="fw-semibold">Connect Wallet</div>
                    <div className="text-secondary small">
                      Connect your wallet to get started.
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="d-flex flex-column align-items-center">
                    <span
                      className="d-flex align-items-center justify-content-center mb-2 bg-primary text-white fw-bold"
                      style={{
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                        fontSize: 22,
                      }}
                    >
                      <FaArrowDown />
                    </span>
                    <div className="fw-semibold">Request a Loan</div>
                    <div className="text-secondary small">
                      Request a loan against your assets.
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="d-flex flex-column align-items-center">
                    <span
                      className="d-flex align-items-center justify-content-center mb-2 bg-primary text-white fw-bold"
                      style={{
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                        fontSize: 22,
                      }}
                    >
                      <FaChartLine />
                    </span>
                    <div className="fw-semibold">Start Earning</div>
                    <div className="text-secondary small">
                      Earn interest on your supplied assets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="lendora-card p-4 mb-4">
              <h5 className="fw-bold mb-3">Testimonials</h5>
              <div className="bg-light p-3 rounded mb-3">
                <div className="text-secondary small mb-1">
                  "Lendora has been a game-changer for me. The platform is easy
                  to use and the interest rates are very competitive."
                </div>
                <div className="fw-semibold">
                  Sarah J. <span className="text-secondary small">USA</span>
                </div>
              </div>
              <div className="bg-light p-3 rounded">
                <div className="text-secondary small mb-1">
                  "I've tried several lending platforms, but Lendora is by far
                  the best. The customer support is excellent and the platform
                  is very secure."
                </div>
                <div className="fw-semibold">
                  Michael L. <span className="text-secondary small">UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Supply Modal */}
        <SupplyModal show={!!supplyModal?.show} onClose={()=>setSupplyModal(null)} assetName={supplyModal?.assetName || ''} assetSymbol={supplyModal?.assetSymbol || ''} />
      </main>
    </div>
  );
}
