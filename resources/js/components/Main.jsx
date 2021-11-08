import { Avatar } from '@chakra-ui/avatar'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/progress'
import React from 'react'

function Main() {
    return (
        <>
         <section>
  <div className="w-4/5 px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-yellow-500 mb-20">MON ACTIVITE
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-600 mb-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Developpement Web</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-600 mb-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Developpement Mobile</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>

        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-600 mb-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
    </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">UI/UX Design</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
        
        </div>
      </div>
    </div>
  </div>
</section>
<section id="skills" className="w-4/5 mx-auto">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-3xl uppercase font-semibold text-yellow-600">Front-end</p>
    <div className="flex flex-col md:flex-row items-center justify-between">
    <CircularProgress value={98} size="120px" color="yellow.400">
  <CircularProgressLabel>
  <Avatar size="lg" name="html" src="/images/html.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={90} size="120px" color="blue.700">
  <CircularProgressLabel>
  <Avatar size="lg" name="css" src="/images/css.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={92} size="120px" color="yellow.400">
  <CircularProgressLabel>
  <Avatar size="lg" name="javascript" src="/images/javascript.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={90} size="120px" color="blue.400">
  <CircularProgressLabel>
  <Avatar size="lg" name="react" src="/images/react.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={85} size="120px" color="red.400">
  <CircularProgressLabel>
  <Avatar size="lg" name="angular" src="/images/angular.jpg" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={80} size="120px" color="teal.200">
  <CircularProgressLabel>
  <Avatar size="lg" name="tailwind" src="/images/tailwind.png" />
  </CircularProgressLabel>
</CircularProgress>
    </div>
  </div>

  <div className="flex flex-col md:flex-row justify-between items-center my-10">
    <p className="text-3xl uppercase font-semibold text-yellow-600">Back-end</p>
    <div className="flex flex-col md:flex-row items-center justify-between">
    <CircularProgress value={90} size="120px" color="purple.400">
  <CircularProgressLabel>
  <Avatar size="lg" name="php" src="/images/php.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={75} size="120px" color="blue.700">
  <CircularProgressLabel>
  <Avatar size="lg" name="node" src="/images/node.jpg" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={85} size="120px" color="yellow.700">
  <CircularProgressLabel>
  <Avatar size="lg" name="laravel" src="/images/laravel.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={90} size="120px" color="red.500">
  <CircularProgressLabel>
  <Avatar size="lg" name="nest" src="/images/nest.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={70} size="120px" color="blue.500">
  <CircularProgressLabel>
  <Avatar size="lg" name="typescript" src="/images/ts.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={75} size="120px" color="pink.500">
  <CircularProgressLabel>
  <Avatar size="lg" name="graphql" src="/images/graphql.png" />
  </CircularProgressLabel>
</CircularProgress>
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-between items-center my-10">
    <p className="text-3xl uppercase font-semibold text-yellow-600">Base de données</p>
    <div className="flex flex-col md:flex-row items-center justify-between">
    <CircularProgress value={90} size="120px" color="green.500">
  <CircularProgressLabel>
  <Avatar size="lg" name="mongodb" src="/images/mongo.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={80} size="120px" color="blue.700">
  <CircularProgressLabel>
  <Avatar size="lg" name="mysql" src="/images/mysql.jpg" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={65} size="120px" color="blue.200">
  <CircularProgressLabel>
  <Avatar size="lg" name="pg" src="/images/pg.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={75} size="120px" color="red.500">
  <CircularProgressLabel>
  <Avatar size="lg" name="redis" src="/images/redis.png" />
  </CircularProgressLabel>
</CircularProgress>
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-between items-center my-10">
    <p className="text-3xl uppercase font-semibold text-yellow-600">Mobile</p>
    <div className="flex flex-col md:flex-row items-center justify-between">
    <CircularProgress value={80} size="120px" color="blue.500">
  <CircularProgressLabel>
  <Avatar size="lg" name="flutter" src="/images/flutter.jpg" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={70} size="120px" color="blue.400">
  <CircularProgressLabel>
  <Avatar size="lg" name="react native" src="/images/react.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={75} size="120px" color="blue.400">
  <CircularProgressLabel>
  <Avatar size="lg" name="ionic" src="/images/ionic.png" />
  </CircularProgressLabel>
</CircularProgress>
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-between items-center my-10">
    <p className="text-3xl uppercase font-semibold text-yellow-600">Devops</p>
    <div className="flex flex-col md:flex-row items-center justify-between">
    <CircularProgress value={70} size="120px" color="blue.300">
  <CircularProgressLabel>
  <Avatar size="lg" name="docker" src="/images/docker.png" />
  </CircularProgressLabel>
</CircularProgress>
<CircularProgress value={60} size="120px" color="blue.400">
  <CircularProgressLabel>
  <Avatar size="lg" name="kebernetes" src="/images/kubernetes.png" />
  </CircularProgressLabel>
</CircularProgress>
    </div>
  </div>
</section>


<section className="text-gray-600 " id="works">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">Mes Réalisations</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="fitnessvert" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/images/fitnessvert.png" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Fitnessvert</h2>
            <h3 className="text-gray-500 mb-3"><a href="https://www.fitnessvert.com">Visiter le site</a></h3>
            <p className="mb-4">Ce projet est la présentation du salle de musculation Fitness Vert</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="dna academy" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/images/dna.png" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">DNA Academy</h2>
            <h3 className="text-gray-500 mb-3"><a href="https://www.dnasnformations.com">Visiter le site</a></h3>
            <p className="mb-4">Ce projet à été réalisé pour la DNA Academy.il s'agit de la présentation et la gestion des formations et évenements</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Main
