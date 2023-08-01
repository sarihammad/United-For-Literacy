<template>
    <div >
        <TitlePage title="Resourses"/>
          <div id="content-container" class="flex flex-wrap lg:ml-[120px]">
            <div id="notification-container-res" class="card md:ml-[240px] m-6 md:p-10 p-6">
              <div class="rounded-tl-card2">
                <div class="flex flex-col">
                  <div class="text-2xl font-bold mb-3">
                    Literacy and Basic Skills Module
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="files-list-container">
                    <ul>
                      <li class="mb-2 flex"> <IconDownload/><a href="/one.pdf" target="_blank" download=""> training-manual1.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/two.pdf" target="_blank" download=""> training-manual2.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/three.pdf" target="_blank" download="">  training-manual3.pdf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="rounded-tl-card2">
                <div class="flex flex-col">
                  <div class="text-2xl font-bold mb-3">Application Forms</div>
                </div>
                <div class="flex flex-col">
                  <div class="files-list-container">
                    <ul>
                      <li class="mb-2 flex"><IconDownload/><a href="/four.pdf" target="_blank" download=""> application.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/five.pdf" target="_blank" download=""> waiver.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/six.pdf" target="_blank" download=""> waiver2.pdf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="rounded-tl-card2">
                <div class="flex flex-col">
                  <div class="text-2xl font-bold mb-3">2023 Summer Camp Files</div>
                </div>
                <div class="flex flex-col">
                  <div class="files-list-container">
                    <ul>
                      <li class="mb-2 flex"><IconDownload/><a href="/four.pdf" target="_blank" download=""> schedule.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/five.pdf" target="_blank" download=""> price.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/six.pdf" target="_blank" download="">apply.pdf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="rounded-tl-card2">
                <div class="flex flex-col">
                  <div class="text-2xl font-bold mb-3">Application Forms</div>
                </div>
                <div class="flex flex-col">
                  <div class="files-list-container">
                    <ul>
                      <li class="mb-2 flex"><IconDownload/><a href="/one.pdf" target="_blank" download="">application.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/two.pdf" target="_blank" download=""> waiver.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/three.pdf" target="_blank" download="">waiver2.pdf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<style scoped>
.rounded-tl-card2 {
  display: flex;
  flex-direction: column;
  color: var(--font-black);
  margin-bottom: 0.8rem;
  padding: 1em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  max-height: 350px;
  width: 100%;
  max-width: 1200px;
  overflow-y: hidden;
}

h1 {
  color: var(--font-black);
  font-size: large;
  font-weight: 700;
}

#notification-container-res {
  min-height: 800px;
  background-color: var(--spring-green);
  border-radius: 60px 0 0 0;
  padding: 3em 2.5em;

}
</style>