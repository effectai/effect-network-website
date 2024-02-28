<template>
  <div class="py-6 always-light">
    <section class="section">
      <div class="container is-max-widescreen">
        <div class="columns is-centered is-vcentered is-variable is-6">
          <div class="column is-5" data-aos="fade-up" data-aos-delay="100">
            <h2 class="title is-2 has-text-white">Become a DAO Member</h2>
            <p>
              The Effect DAO is a decentralized autonomous organization that
              governs the Effect.AI Network. It is a community-driven
              organization that is responsible for the development and growth of
              the network.
            </p>
            <br />
            <p class="has-text-weight-bold">
              Join the DAO and have a voice on the development of the future of
              work.
            </p>
          </div>
          <div class="column is-7" data-aos="fade-up" data-aos-delay="350">
            <div class="card dao-card">
              <div class="card-content">
                <img
                  src="@/assets/img/dapps/effect-dao.png"
                  width="200"
                  class="mb-5"
                />
                <h4 class="subtitle">Vote, Stake and Earn EFX</h4>

                <p>status: voting</p>
                <p>cycle: 163</p>
                <p>some other interesting statistics</p>

                <a
                  href="https://dao.effect.network"
                  target="_blank"
                  class="button is-primary mt-5"
                  >Become a member</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.dao-card {
  text-align: center;
  background: #f5f5f5;
  border-radius: 10px;
  border: 3px solid #e5e5e5;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .card-content {
    padding: 0;
  }
}
</style>
