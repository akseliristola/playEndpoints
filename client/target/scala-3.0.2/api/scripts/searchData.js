pages = [{"l":"api/index.html","n":"play-client","t":"play-client","d":"","k":"static"},
{"l":"api/endpoints4s/play/client.html","n":"endpoints4s.play.client","t":"package endpoints4s.play.client","d":"endpoints4s/play/client","k":"package"},
{"l":"api/endpoints4s/play/client/BasicAuthentication.html","n":"BasicAuthentication","t":"trait BasicAuthentication extends BasicAuthentication","d":"endpoints4s/play/client/BasicAuthentication","k":"trait"},
{"l":"api/endpoints4s/play/client/BuiltInErrors.html","n":"BuiltInErrors","t":"trait BuiltInErrors extends BuiltInErrors","d":"endpoints4s/play/client/BuiltInErrors","k":"trait"},
{"l":"api/endpoints4s/play/client/BuiltInErrors.html","n":"clientErrorsResponseEntity","t":"def clientErrorsResponseEntity: <none>[Invalid]","d":"endpoints4s/play/client/BuiltInErrors","k":"def"},
{"l":"api/endpoints4s/play/client/BuiltInErrors.html","n":"serverErrorResponseEntity","t":"def serverErrorResponseEntity: <none>[Throwable]","d":"endpoints4s/play/client/BuiltInErrors","k":"def"},
{"l":"api/endpoints4s/play/client/Endpoints.html","n":"Endpoints","t":"class Endpoints(val host: String, val wsClient: WSClient)(implicit val executionContext: ExecutionContext) extends Endpoints with EndpointsWithCustomErrors with BuiltInErrors","d":"endpoints4s/play/client/Endpoints","k":"class"},
{"l":"api/endpoints4s/play/client/Endpoints.html","n":"executionContext","t":"val executionContext: ExecutionContext","d":"endpoints4s/play/client/Endpoints","k":"val"},
{"l":"api/endpoints4s/play/client/Endpoints.html","n":"host","t":"val host: String","d":"endpoints4s/play/client/Endpoints","k":"val"},
{"l":"api/endpoints4s/play/client/Endpoints.html","n":"wsClient","t":"val wsClient: WSClient","d":"endpoints4s/play/client/Endpoints","k":"val"},
{"l":"api/endpoints4s/play/client/Endpoints$.html","n":"Endpoints","t":"object Endpoints","d":"endpoints4s/play/client/Endpoints$","k":"object"},
{"l":"api/endpoints4s/play/client/Endpoints$.html","n":"futureFromEither","t":"def futureFromEither[A](errorOrA: Either[Throwable, A]): Future[A]","d":"endpoints4s/play/client/Endpoints$","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"EndpointsWithCustomErrors","t":"trait EndpointsWithCustomErrors extends EndpointsWithCustomErrors with Urls with Methods with StatusCodes","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"trait"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"Request","t":"type Request[A] = A => WSRequest","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"RequestEntity","t":"type RequestEntity[A] = (A, WSRequest) => WSRequest","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"RequestHeaders","t":"type RequestHeaders[A] = (A, WSRequest) => WSRequest","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"Response","t":"type Response[A] = (StatusCode, Map[String, Seq[String]]) => Option[() => A]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"ResponseEntity","t":"type ResponseEntity[A] = WSResponse => Either[Throwable, A]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"ResponseHeaders","t":"type ResponseHeaders[A] = Map[String, Seq[String]] => Validated[A]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"choiceRequestEntity","t":"def choiceRequestEntity[A, B](requestEntityA: () => A, requestEntityB: () => B): () => Either[A, B]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"choiceResponse","t":"def choiceResponse[A, B](responseA: () => A, responseB: () => B): () => Either[A, B]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"emptyRequest","t":"val emptyRequest: () => Unit","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"emptyRequestHeaders","t":"val emptyRequestHeaders: () => Unit","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"emptyResponse","t":"def emptyResponse: () => Unit","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"emptyResponseHeaders","t":"def emptyResponseHeaders: () => Unit","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"endpoint","t":"def endpoint[A, B](request: () => A, response: () => B, docs: EndpointDocs): Endpoint[A, B]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"executionContext","t":"def executionContext: ExecutionContext","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"host","t":"def host: String","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"optRequestHeader","t":"def optRequestHeader(name: String, docs: Documentation): (Option[String], WSRequest) => WSRequest","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"optResponseHeader","t":"def optResponseHeader(name: String, docs: Documentation): () => Option[String]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"request","t":"def request[A, B, C, AB, Out](method: Method, url: Url[A], entity: () => B, docs: Documentation, headers: () => C)(implicit tuplerAB: Aux[A, B, AB], tuplerABC: Aux[AB, C, Out]): () => Out","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"requestEntityPartialInvariantFunctor","t":"val requestEntityPartialInvariantFunctor: PartialInvariantFunctor[RequestEntity]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"requestHeader","t":"def requestHeader(name: String, docs: Documentation): (String, WSRequest) => WSRequest","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"requestHeadersPartialInvariantFunctor","t":"val requestHeadersPartialInvariantFunctor: PartialInvariantFunctor[RequestHeaders]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"requestHeadersSemigroupal","t":"val requestHeadersSemigroupal: Semigroupal[RequestHeaders]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"requestPartialInvariantFunctor","t":"def requestPartialInvariantFunctor: PartialInvariantFunctor[Request]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"response","t":"def response[A, B, R](statusCode: StatusCode, entity: () => A, docs: Documentation, headers: () => B)(implicit tupler: Aux[A, B, R]): () => R","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"responseEntityInvariantFunctor","t":"def responseEntityInvariantFunctor: InvariantFunctor[ResponseEntity]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"responseHeader","t":"def responseHeader(name: String, docs: Documentation): () => String","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"responseHeadersInvariantFunctor","t":"def responseHeadersInvariantFunctor: InvariantFunctor[ResponseHeaders]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"responseHeadersSemigroupal","t":"def responseHeadersSemigroupal: Semigroupal[ResponseHeaders]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"responseInvariantFunctor","t":"val responseInvariantFunctor: InvariantFunctor[Response]","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"textRequest","t":"val textRequest: (String, WSRequest) => WSRequest","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"textResponse","t":"def textResponse: () => String","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors.html","n":"wsClient","t":"def wsClient: WSClient","d":"endpoints4s/play/client/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors$Endpoint.html","n":"Endpoint","t":"class Endpoint[A, B](request: () => A, response: () => B) extends A => Future[B]","d":"endpoints4s/play/client/EndpointsWithCustomErrors$Endpoint","k":"class"},
{"l":"api/endpoints4s/play/client/EndpointsWithCustomErrors$Endpoint.html","n":"apply","t":"def apply(a: A): Future[B]","d":"endpoints4s/play/client/EndpointsWithCustomErrors$Endpoint","k":"def"},
{"l":"api/endpoints4s/play/client/JsonEntitiesFromCodecs.html","n":"JsonEntitiesFromCodecs","t":"trait JsonEntitiesFromCodecs extends JsonEntitiesFromCodecs with EndpointsWithCustomErrors","d":"endpoints4s/play/client/JsonEntitiesFromCodecs","k":"trait"},
{"l":"api/endpoints4s/play/client/JsonEntitiesFromCodecs.html","n":"jsonRequest","t":"def jsonRequest[A](implicit codec: JsonCodec[A]): () => A","d":"endpoints4s/play/client/JsonEntitiesFromCodecs","k":"def"},
{"l":"api/endpoints4s/play/client/JsonEntitiesFromCodecs.html","n":"jsonResponse","t":"def jsonResponse[A](implicit codec: JsonCodec[A]): () => A","d":"endpoints4s/play/client/JsonEntitiesFromCodecs","k":"def"},
{"l":"api/endpoints4s/play/client/JsonEntitiesFromSchemas.html","n":"JsonEntitiesFromSchemas","t":"trait JsonEntitiesFromSchemas extends JsonEntitiesFromSchemas with JsonEntitiesFromCodecs with JsonSchemas","d":"endpoints4s/play/client/JsonEntitiesFromSchemas","k":"trait"},
{"l":"api/endpoints4s/play/client/JsonEntitiesFromSchemas.html","n":"stringCodec","t":"def stringCodec[A](implicit codec: JsonSchema[A]): Codec[String, A]","d":"endpoints4s/play/client/JsonEntitiesFromSchemas","k":"def"},
{"l":"api/endpoints4s/play/client/Methods.html","n":"Methods","t":"trait Methods extends Methods","d":"endpoints4s/play/client/Methods","k":"trait"},
{"l":"api/endpoints4s/play/client/Methods.html","n":"Delete","t":"def Delete: Method","d":"endpoints4s/play/client/Methods","k":"def"},
{"l":"api/endpoints4s/play/client/Methods.html","n":"Get","t":"def Get: Method","d":"endpoints4s/play/client/Methods","k":"def"},
{"l":"api/endpoints4s/play/client/Methods.html","n":"Method","t":"type Method = WSRequest => WSRequest","d":"endpoints4s/play/client/Methods","k":"type"},
{"l":"api/endpoints4s/play/client/Methods.html","n":"Options","t":"def Options: Method","d":"endpoints4s/play/client/Methods","k":"def"},
{"l":"api/endpoints4s/play/client/Methods.html","n":"Patch","t":"def Patch: Method","d":"endpoints4s/play/client/Methods","k":"def"},
{"l":"api/endpoints4s/play/client/Methods.html","n":"Post","t":"def Post: Method","d":"endpoints4s/play/client/Methods","k":"def"},
{"l":"api/endpoints4s/play/client/Methods.html","n":"Put","t":"def Put: Method","d":"endpoints4s/play/client/Methods","k":"def"},
{"l":"api/endpoints4s/play/client/MuxEndpoints.html","n":"MuxEndpoints","t":"trait MuxEndpoints extends Endpoints","d":"endpoints4s/play/client/MuxEndpoints","k":"trait"},
{"l":"api/endpoints4s/play/client/MuxEndpoints.html","n":"muxEndpoint","t":"def muxEndpoint[Req <: MuxRequest, Resp, Transport](request: Request[Transport], response: Response[Transport]): MuxEndpoint[Req, Resp, Transport]","d":"endpoints4s/play/client/MuxEndpoints","k":"def"},
{"l":"api/endpoints4s/play/client/MuxEndpoints$MuxEndpoint.html","n":"MuxEndpoint","t":"class MuxEndpoint[Req <: MuxRequest, Resp, Transport](request: () => Transport, response: () => Transport)","d":"endpoints4s/play/client/MuxEndpoints$MuxEndpoint","k":"class"},
{"l":"api/endpoints4s/play/client/MuxEndpoints$MuxEndpoint.html","n":"apply","t":"def apply(req: Req)(implicit encoder: Encoder[Req, Transport], decoder: Decoder[Transport, Resp]): Future[Response]","d":"endpoints4s/play/client/MuxEndpoints$MuxEndpoint","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"StatusCodes","t":"trait StatusCodes extends StatusCodes","d":"endpoints4s/play/client/StatusCodes","k":"trait"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"Accepted","t":"def Accepted: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"BadRequest","t":"def BadRequest: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"Created","t":"def Created: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"Forbidden","t":"def Forbidden: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"InternalServerError","t":"def InternalServerError: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"NoContent","t":"def NoContent: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"NotFound","t":"def NotFound: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"NotImplemented","t":"def NotImplemented: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"OK","t":"def OK: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"PayloadTooLarge","t":"def PayloadTooLarge: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"StatusCode","t":"type StatusCode = Int","d":"endpoints4s/play/client/StatusCodes","k":"type"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"TooManyRequests","t":"def TooManyRequests: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/StatusCodes.html","n":"Unauthorized","t":"def Unauthorized: StatusCode","d":"endpoints4s/play/client/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"Urls","t":"trait Urls extends Urls","d":"endpoints4s/play/client/Urls","k":"trait"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"QueryStringParam","t":"type QueryStringParam[A] = A => List[String]","d":"endpoints4s/play/client/Urls","k":"type"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"WithDefault","t":"type WithDefault[A] = Option[A]","d":"endpoints4s/play/client/Urls","k":"type"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"chainPaths","t":"def chainPaths[A, B](first: Path[A], second: Path[B])(implicit tupler: Tupler[A, B]): Path[Out]","d":"endpoints4s/play/client/Urls","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"combineQueryStrings","t":"def combineQueryStrings[A, B](first: QueryString[A], second: QueryString[B])(implicit tupler: Tupler[A, B]): QueryString[Out]","d":"endpoints4s/play/client/Urls","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"optionalQueryStringParam","t":"def optionalQueryStringParam[A](implicit param: () => A): () => Option[A]","d":"endpoints4s/play/client/Urls","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"pathPartialInvariantFunctor","t":"val pathPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> Path[A]]","d":"endpoints4s/play/client/Urls","k":"val"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"qs","t":"def qs[A](name: String, docs: Documentation)(implicit param: () => A): QueryString[A]","d":"endpoints4s/play/client/Urls","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"queryStringParamPartialInvariantFunctor","t":"val queryStringParamPartialInvariantFunctor: PartialInvariantFunctor[QueryStringParam]","d":"endpoints4s/play/client/Urls","k":"val"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"queryStringPartialInvariantFunctor","t":"val queryStringPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> QueryString[A]]","d":"endpoints4s/play/client/Urls","k":"val"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"remainingSegments","t":"def remainingSegments(name: String, docs: Documentation): Path[String]","d":"endpoints4s/play/client/Urls","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"repeatedQueryStringParam","t":"def repeatedQueryStringParam[A, CC <: ([X] =>> Iterable[X])](implicit param: () => A, factory: Factory[A, CC[A]]): () => CC[A]","d":"endpoints4s/play/client/Urls","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"segment","t":"def segment[A](name: String, docs: Documentation)(implicit s: Segment[A]): Path[A]","d":"endpoints4s/play/client/Urls","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"segmentPartialInvariantFunctor","t":"val segmentPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> Segment[A]]","d":"endpoints4s/play/client/Urls","k":"val"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"staticPathSegment","t":"def staticPathSegment(segment: String): Path[Unit]","d":"endpoints4s/play/client/Urls","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"stringQueryString","t":"val stringQueryString: () => String","d":"endpoints4s/play/client/Urls","k":"val"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"stringSegment","t":"val stringSegment: Segment[String]","d":"endpoints4s/play/client/Urls","k":"val"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"urlPartialInvariantFunctor","t":"val urlPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> Url[A]]","d":"endpoints4s/play/client/Urls","k":"val"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"urlWithQueryString","t":"def urlWithQueryString[A, B](path: Path[A], qs: QueryString[B])(implicit tupler: Tupler[A, B]): Url[Out]","d":"endpoints4s/play/client/Urls","k":"def"},
{"l":"api/endpoints4s/play/client/Urls.html","n":"utf8Name","t":"val utf8Name: String","d":"endpoints4s/play/client/Urls","k":"val"},
{"l":"api/endpoints4s/play/client/Urls$Path.html","n":"Path","t":"trait Path[A] extends Url[A]","d":"endpoints4s/play/client/Urls$Path","k":"trait"},
{"l":"api/endpoints4s/play/client/Urls$QueryString.html","n":"QueryString","t":"trait QueryString[A]","d":"endpoints4s/play/client/Urls$QueryString","k":"trait"},
{"l":"api/endpoints4s/play/client/Urls$QueryString.html","n":"encodeQueryString","t":"def encodeQueryString(a: A): Option[String]","d":"endpoints4s/play/client/Urls$QueryString","k":"def"},
{"l":"api/endpoints4s/play/client/Urls$Segment.html","n":"Segment","t":"trait Segment[A]","d":"endpoints4s/play/client/Urls$Segment","k":"trait"},
{"l":"api/endpoints4s/play/client/Urls$Segment.html","n":"encode","t":"def encode(a: A): String","d":"endpoints4s/play/client/Urls$Segment","k":"def"},
{"l":"api/endpoints4s/play/client/Urls$Url.html","n":"Url","t":"trait Url[A]","d":"endpoints4s/play/client/Urls$Url","k":"trait"},
{"l":"api/endpoints4s/play/client/Urls$Url.html","n":"encode","t":"def encode(a: A): String","d":"endpoints4s/play/client/Urls$Url","k":"def"},
{"l":"docs/index.html","n":"play-client","t":"play-client","d":"","k":"static"}];