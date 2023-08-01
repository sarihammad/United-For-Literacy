<template>
    <div>
        <TitlePage title="Testimonial" class="pt-[100px] md:pt-0"/>
        <div class="rounded-card md:ml-[240px] m-6 md:p-10 p-6">
            <form>
                <div class="mt-4 flex flex-col">
                    <label for="program-name">Program name:  </label>
                    <select required>
                    <option value="none"></option>
                    <option value="Literaccy and Basic skills">Literacy and Basic skills</option>
                    </select>

                </div>
                <div class="mt-6 flex flex-col">
                    <label>Role: </label>
                    <select required  v-model="role">
                    <option value="Volunteer" selected>Volunteer</option>
                    <option value="Learner">Learner</option>
                    <option value="Parent">Parent</option>
                    <option value="Community Partner">Community Partner</option>
                    <option value="Educator">Educator</option>
                    <option value="Camp Admin">Camp Admin</option>
                    <option value="Elder">Elder</option>
                    <option value="Other">Other</option>
                    </select>
                </div>

                <div class="mt-6 flex flex-col">
                    <label for="other-role">If Other, please specify role:  </label>
                    <input id="other-role" type="text" v-model="otherRole">
                </div>
                
                <div class="mt-6 flex flex-col">
                    <label for="testimonial_date">Date recorded:  </label>
                    <input id="testimonial_date" type="date" required v-model="testimonial_date">
                </div>
                
                <div class="mt-6 flex flex-col">
                    <label >Topics:  </label>
                    <select required v-model="topic">
                    <option value="none"></option>
                    <option value="Participant/Learner">Participant/Learner</option>
                    <option value="Parent Impact">Parent Impact</option>
                    <option value="Partner Community">Partner Community</option>
                    <option value="Community Leader Thoughts">Community Leader Thoughts</option>
                    <option value="Community Member Thoughts">Community Member Thoughts</option>
                    <option value="Educator Feedback">Educator Feedback</option>
                    <option value="Challenges">Challenges</option>
                    </select>
                </div>
                
                <div class="mt-6 mb-4">
                    <textarea id="testimonial-story" placeholder="Write your testimonial here" rows="4" class="w-full p-2" v-model="story" required></textarea>
                </div>
                
                <!-- <FCButton text="Submit"/> -->
                <button @click="submit">Submit</button>

            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      testimonial_date: '',
      role: '',
      otherRole: '',
      topic: '',
      story: ''
    };
  },
  methods: {
    async submit(){
        // date, program and topic are required fields!
        if (this.role === '' || this.topic === '' || this.story === ''){
            alert('Please fill out all required fields!')
        }
        else{
            setTimeout(() => {
                alert('Testimonial has been successfully submitted!')
            }, 5);
            const client = useClient()
            await client.mutation('createTestimonial', {
                programID: 'a26Au00000008tdIAA',
                role: this.role,
                otherRole: this.otherRole,
                topics: this.topic,
                story: this.story,
                date: (new Date(this.testimonial_date)).toISOString()
            });
        }
        
    }
  }

};

</script>

<style scoped>

    form label{
        font-weight: 600;
        font-size: 0.9rem;
    }

    form input, form select, form textarea{
        border: 1px solid #00000050;
        border-radius: 10px;
        padding: 6px 6px;
    }

    .rounded-card{
        color: black;
        background-color: #92c83e80;
        border-radius: 50px 0 0 0;
        box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
        overflow-y: hidden;
        max-width: 800px;
    }
    button{
        background-color: var(--dark-green);
        color: white;
        border-radius: 5px;
        padding: 6px 12px;
    }
</style>




