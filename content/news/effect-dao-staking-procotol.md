---
title: "The Effect DAO: Effect Staking Protocol 2.0"
description: "By staking EFX, holders can improve their rank in The Effect DAO. Achieving a high rank has many benefits like vote casting, fee reward collection, and gaining privileges on the dApp level."
image:
  src: "/img/news/effect-staking.webp"
author: "Laurens"
head:
  meta:
    - name: "keywords"
      content: "AI, EFX, deepdive, technology, staking"
    - name: "author"
      content: "Laurens - Effect.AI"
    - name: "copyright"
      content: "© 2024 Effect.AI"
lastUpdated: "2024-03-07"
created: "2024-03-07"
published: true
---

## The Effect DAO: Effect Staking Protocol 2.0

By staking EFX, holders can improve their rank in The Effect DAO. Achieving a high rank has many benefits like vote casting, fee reward collection, and gaining privileges on the dApp level. Each rank in the DAO is accompanied by a degree of responsibility in the Network. Users are held accountable for their actions with the risk of losing their stake position, its value, and associated privileges. To summarize, this means staking can be seen as a person’s proof of commitment and it is used as a primary quality measure in the network.

## DAO Ranking

The TriForce of EFX and its Stake AGE combined with NFX is the core of the new Staking Protocol 2.0. These three factors will determine your DAO Rank, which in turn determines how many voting allocations (and thus fee rewards) you have at your disposal.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*snW5nBTLyQHMWCv1XnCB1w.png)

Your DAO Rank will be useful for, among other things, proposal writing, vote allocations, fee distributions, etc. The precise DAO-level specifications will be determined in the technical paper, but the graph below demonstrates the high-level understanding of how the DAO level will be influenced by EFX Power and NFX. By using an exponential function to determine the minimum requirement of EFX Power, it will be easier for newcomers with lower rankings to participate in the DAO. It will, however, take longer if you want to participate with higher levels of DAO ranking. As your EFX Power increases over time due to Stake AGE (more on this later), and to keep things fair, there is an exponential increase in requirement for EFX (shown with the red line). Since NFX doesn’t have the feature of Stake AGE, it makes more sense to have a linear function that determines the minimum requirements per level (shown with the blue line):

![](https://miro.medium.com/v2/resize:fit:720/format:webp/0*EjOpPnzcgStRG79X)

## EFX Power

EFX Power is a factor that determines your weight and rank within the DAO. This measurement is a result of the Staking Protocol 2.0. There are two ways to increase your EFX Staking Power:

Increase the number of staked EFX tokens
Stake your EFX tokens longer to increase their Stake AGE
The first one is fairly simple: the more tokens you stake the more EFX Power you will have. This is simply a 1:1 ratio (e.g. 100k staked EFX = 100k EFX Power). This is how most ordinary staking protocols work. However, The Effect Staking Protocol includes a measurement feature to track how long your stake has been active. This feature is called Stake AGE. Below you will find a graph that shows how Stake AGE can affect the EFX Power for a fixed number of staked EFX tokens (100k EFX).

![](https://miro.medium.com/v2/resize:fit:720/format:webp/0*WqSBasfB0M6fHVW2)

## Stake AGE

Stake AGE is a factor that increases the weight of staked tokens linearly over time; the longer the tokens are staked the more EFX Power they will have.

Stake AGE was first introduced in Effect Staking Protocol 1.0. This section will give a recap of the benefits and power of Stake AGE and also outlines the differences between Staking Protocol 1.0 and Staking Protocol 2.0.

In version 1.0, Stake AGE was a multiplier for the number of NFX tokens that were generated with your staked EFX tokens. The generation of NFX tokens will stop at one point if we switch over to the new version, but staking will continue, as well as Stake AGE. In Staking Protocol 2.0, the existing limit of 200 days Stake AGE will be increased and the role of Stake AGE will become even more important and powerful. With the parameters outlined in the graph from the previous section, it shows that Stake AGE can double your EFX power by adding the initially staked tokens to your EFX power after 200 days of Stake AGE. This means, for example, that someone with 100k staked tokens with a year of Stake AGE has more EFX Power than someone who recently staked 200k EFX. The limit will be set in such a way that early and long-term members will greatly benefit from having staked their tokens longer. Also, it will make the Stake AGE not too powerful, as it still needs to be beneficial to stake more EFX as well. Such a parameter is a great example of something that can be controlled by DAO governance voting proposals.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/0*cnSX-wam1SSSoVa2)

Stake AGE has several benefits over regular staking:

Users will be incentivized to keep their tokens staked for a longer time.
Early and long-term participants are rewarded.
It will be harder for new members with a lot of tokens to immediately take big rewards or votes from the DAO.
The penalty for unstaking will be bigger as users will lose their Stake AGE for their unstaked tokens, making sure users are incentivized to keep their tokens staked.

## Voting Allocations and Fee Rewards

There are four major stages that play an important role in the Effect DAO. The first one is the Staking Protocol, which will determine your DAO Rank. The next stage is to become a DAO Guardian with your DAO Rank by signing the DAO Constitution and participating in the Network. More on DAO Guardians can be found in this blog post. As a DAO Guardian, you can use your DAO Rank to write proposals and cast votes. By participating in the DAO, you’ll earn stakes in the network fee distribution pool which is the last stage of the Effect DAO.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*rw_jP8fvKGDm7Mrzeu4u4A.png)

The number of votes that a Guardian has is determined by the Effect Staking Protocol: a Triforce of EFX and its Stake Age, and more importantly, NFX. These three factors determine your DAO Rank and how many voting allocations you have at your disposal. Participating in either voting or proposing is highly rewarded with fee distributions, which will be discussed in a forthcoming chapter. Tied Voting Allocations will also play a special role in the fee distribution later on. You can read more about the Effect DAO Voting system in this blog post.

## Migration from 1.0 to 2.0

The EFX that you currently have staked combined with your Stake AGE will be carried over to the Staking Protocol 2.0, so there is no reason for unstaking. In addition to the NFX bonus that early adopters have already generated by Staking Protocol 1.0 received, this carryover of Stake AGE is another valuable benefit for early and long-term stakers. Important to note that the generation of NFX will stop at the deployment of Effect Staking Protocol 2.0.

## More details: Technical Paper

While this blog post outlines the high-level inner workings of the new Staking Protocol 2.0, the exact implementation, parameters, and details are being finalized in a Technical Paper. This paper will cover the mathematical formulas, among other things, for EFX Power with limited Stake AGE, the DAO level requirement formulas, dilution of the Stake AGE when topping up your stake, voting allocations, and more. Keep an eye out for this Technical Paper if you are interested in learning more about the specifics.

If you are interested in buying EFX please go to KUCOIN cryptocurrency exchange.

Thanks for reading!
