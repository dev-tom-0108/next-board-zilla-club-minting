import { Container } from '@mui/material';
import FAQItem from './FAQItem';

export default function FAQ() {
  return (
    <div id="faq" className="faq">
      <Container>
        <div className="section-title">
          <h1>FAQ</h1>
          <p>Frequently asked questions</p>
        </div>
        <div className="faq-content">
          {questions.map((item, key) => (
            <FAQItem
              question={item.question}
              answer={item.answer}
              key={key}
            />
          ))
          }

        </div>
      </Container>
      {/* eslint-disable-next-line */}
      <img
        src="/faq-pattern.png"
        data-nsfw-filter-status
        alt=""
      />
    </div>
  )
}

const questions = [
  {
    question: "What is the total supply?",
    answer: "There will be a total of 3,333 unique Bored Zillas, which will be distributed as below:@@Whitelist Only Mint:@@You will be able to mint maximum of 3 Zillas per wallet during the Whitelist Only Sale.@@The remaining Zillas will be available during the stealth Public Sale, with no maximum amount per wallet.@@100 Bored Zillas will be reserved for giveaways and staff."
  },
  {
    question: "What network will this be launched on?",
    answer: "It will be launched on the Ethereum (Erc721) network"
  },
  {
    question: "How much does it cost to mint an NFT?",
    answer: "OG members: 0.06 ETH + gas (3 mint limit per wallet)@@WL members: 0.07 ETH + gas (3 mint limit per wallet)@@Public: 0.07 ETH + gas (no limit per wallet)"
  },
  {
    question: "How many can I mint during the sale?",
    answer: "WL Only Sale: 3 mints per wallet@@Public Sale: no limit per wallet"
  },
  {
    question: "Will my Bored Zilla Club NFT be revealed directly after purchase?",
    answer: "Yes! You will be able to see your Bored Zilla in your Metamask wallet right after you mint it."
  },
  {
    question: "When will we be able to see rarity and where?",
    answer: "Post-launch, traits will be revealed. Once all Zillas are minted, percentages on OpenSea will be accurate."
  },
  {
    question: "Can I use metamask for this?",
    answer: "Yes, we recommend using metamask."
  },
]