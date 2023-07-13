pages = [{"l":"api/index.html","n":"play-server","t":"play-server","d":"","k":"static"},
{"l":"api/endpoints4s/play/server.html","n":"endpoints4s.play.server","t":"package endpoints4s.play.server","d":"endpoints4s/play/server","k":"package"},
{"l":"api/endpoints4s/play/server/Assets.html","n":"Assets","t":"trait Assets extends Assets with EndpointsWithCustomErrors","d":"endpoints4s/play/server/Assets","k":"trait"},
{"l":"api/endpoints4s/play/server/Assets.html","n":"asset","t":"def asset(name: String): AssetRequest","d":"endpoints4s/play/server/Assets","k":"def"},
{"l":"api/endpoints4s/play/server/Assets.html","n":"asset","t":"def asset(path: String, name: String): AssetRequest","d":"endpoints4s/play/server/Assets","k":"def"},
{"l":"api/endpoints4s/play/server/Assets.html","n":"assetSegments","t":"def assetSegments(name: String, docs: Documentation): Path[AssetPath]","d":"endpoints4s/play/server/Assets","k":"def"},
{"l":"api/endpoints4s/play/server/Assets.html","n":"assetsEndpoint","t":"def assetsEndpoint(url: Url[AssetPath], docs: Documentation, notFoundDocs: Documentation): Endpoint[AssetRequest, AssetResponse]","d":"endpoints4s/play/server/Assets","k":"def"},
{"l":"api/endpoints4s/play/server/Assets.html","n":"assetsResources","t":"def assetsResources(pathPrefix: Option[String]): AssetRequest => AssetResponse","d":"endpoints4s/play/server/Assets","k":"def"},
{"l":"api/endpoints4s/play/server/Assets$AssetNotFound$.html","n":"AssetNotFound","t":"object AssetNotFound extends AssetResponse","d":"endpoints4s/play/server/Assets$AssetNotFound$","k":"object"},
{"l":"api/endpoints4s/play/server/Assets$AssetPath.html","n":"AssetPath","t":"class AssetPath(path: Seq[String], digest: String, name: String)","d":"endpoints4s/play/server/Assets$AssetPath","k":"class"},
{"l":"api/endpoints4s/play/server/Assets$AssetRequest.html","n":"AssetRequest","t":"class AssetRequest(assetPath: AssetPath, isGzipSupported: Boolean)","d":"endpoints4s/play/server/Assets$AssetRequest","k":"class"},
{"l":"api/endpoints4s/play/server/Assets$AssetResponse.html","n":"AssetResponse","t":"trait AssetResponse","d":"endpoints4s/play/server/Assets$AssetResponse","k":"trait"},
{"l":"api/endpoints4s/play/server/Assets$Found.html","n":"Found","t":"class Found(data: Source[ByteString, _], contentLength: Option[Long], contentType: Option[String], isGzipped: Boolean) extends AssetResponse","d":"endpoints4s/play/server/Assets$Found","k":"class"},
{"l":"api/endpoints4s/play/server/BasicAuthentication.html","n":"BasicAuthentication","t":"trait BasicAuthentication extends BasicAuthentication with EndpointsWithCustomErrors","d":"endpoints4s/play/server/BasicAuthentication","k":"trait"},
{"l":"api/endpoints4s/play/server/BasicAuthentication.html","n":"authenticatedRequest","t":"def authenticatedRequest[U, E, H, UE, HC, Out](method: Method, url: Url[U], entity: () => E, headers: () => H, requestDocs: Documentation)(implicit tuplerUE: Aux[U, E, UE], tuplerHC: Aux[H, Credentials, HC], tuplerUEHC: Aux[UE, HC, Out]): Request[Out]","d":"endpoints4s/play/server/BasicAuthentication","k":"def"},
{"l":"api/endpoints4s/play/server/BuiltInErrors.html","n":"BuiltInErrors","t":"trait BuiltInErrors extends BuiltInErrors","d":"endpoints4s/play/server/BuiltInErrors","k":"trait"},
{"l":"api/endpoints4s/play/server/BuiltInErrors.html","n":"clientErrorsResponseEntity","t":"def clientErrorsResponseEntity: <none>[Invalid]","d":"endpoints4s/play/server/BuiltInErrors","k":"def"},
{"l":"api/endpoints4s/play/server/BuiltInErrors.html","n":"serverErrorResponseEntity","t":"def serverErrorResponseEntity: <none>[Throwable]","d":"endpoints4s/play/server/BuiltInErrors","k":"def"},
{"l":"api/endpoints4s/play/server/ChunkedEntities.html","n":"ChunkedEntities","t":"trait ChunkedEntities extends EndpointsWithCustomErrors with ChunkedEntities","d":"endpoints4s/play/server/ChunkedEntities","k":"trait"},
{"l":"api/endpoints4s/play/server/ChunkedEntities.html","n":"Chunks","t":"type Chunks[A] = Source[A, _]","d":"endpoints4s/play/server/ChunkedEntities","k":"type"},
{"l":"api/endpoints4s/play/server/ChunkedEntities.html","n":"bytesChunksRequest","t":"def bytesChunksRequest: () => Chunks[Array[Byte]]","d":"endpoints4s/play/server/ChunkedEntities","k":"def"},
{"l":"api/endpoints4s/play/server/ChunkedEntities.html","n":"bytesChunksResponse","t":"def bytesChunksResponse: () => Chunks[Array[Byte]]","d":"endpoints4s/play/server/ChunkedEntities","k":"def"},
{"l":"api/endpoints4s/play/server/ChunkedEntities.html","n":"textChunksRequest","t":"def textChunksRequest: () => Chunks[String]","d":"endpoints4s/play/server/ChunkedEntities","k":"def"},
{"l":"api/endpoints4s/play/server/ChunkedEntities.html","n":"textChunksResponse","t":"def textChunksResponse: () => Chunks[String]","d":"endpoints4s/play/server/ChunkedEntities","k":"def"},
{"l":"api/endpoints4s/play/server/ChunkedJsonEntities.html","n":"ChunkedJsonEntities","t":"trait ChunkedJsonEntities extends ChunkedEntities with ChunkedJsonEntities with JsonEntitiesFromCodecs","d":"endpoints4s/play/server/ChunkedJsonEntities","k":"trait"},
{"l":"api/endpoints4s/play/server/ChunkedJsonEntities.html","n":"jsonChunksRequest","t":"def jsonChunksRequest[A](implicit codec: JsonCodec[A]): () => Chunks[A]","d":"endpoints4s/play/server/ChunkedJsonEntities","k":"def"},
{"l":"api/endpoints4s/play/server/ChunkedJsonEntities.html","n":"jsonChunksResponse","t":"def jsonChunksResponse[A](implicit codec: JsonCodec[A]): () => Chunks[A]","d":"endpoints4s/play/server/ChunkedJsonEntities","k":"def"},
{"l":"api/endpoints4s/play/server/ChunkedJsonEntities.html","n":"newLineDelimiterFraming","t":"val newLineDelimiterFraming: Framing","d":"endpoints4s/play/server/ChunkedJsonEntities","k":"val"},
{"l":"api/endpoints4s/play/server/ChunkedJsonEntities$Framing.html","n":"Framing","t":"class Framing(val request: Flow[ByteString, ByteString, NotUsed], val response: Flow[ByteString, ByteString, NotUsed])","d":"endpoints4s/play/server/ChunkedJsonEntities$Framing","k":"class"},
{"l":"api/endpoints4s/play/server/ChunkedJsonEntities$Framing.html","n":"request","t":"val request: Flow[ByteString, ByteString, NotUsed]","d":"endpoints4s/play/server/ChunkedJsonEntities$Framing","k":"val"},
{"l":"api/endpoints4s/play/server/ChunkedJsonEntities$Framing.html","n":"response","t":"val response: Flow[ByteString, ByteString, NotUsed]","d":"endpoints4s/play/server/ChunkedJsonEntities$Framing","k":"val"},
{"l":"api/endpoints4s/play/server/Endpoints.html","n":"Endpoints","t":"trait Endpoints extends Endpoints with EndpointsWithCustomErrors with BuiltInErrors","d":"endpoints4s/play/server/Endpoints","k":"trait"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"EndpointsWithCustomErrors","t":"trait EndpointsWithCustomErrors extends EndpointsWithCustomErrors with Urls with Methods with StatusCodes","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"trait"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"EmptyEndpointToPlayHandler","t":"def EmptyEndpointToPlayHandler[A, B](endpoint: Endpoint[A, B])(implicit ev: Unit =:= B): ToPlayHandler","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"RequestEntity","t":"type RequestEntity[A] = RequestHeader => Option[BodyParser[A]]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"RequestHeaders","t":"type RequestHeaders[A] = Headers => Validated[A]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"Response","t":"type Response[A] = A => Result","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"ResponseEntity","t":"type ResponseEntity[A] = A => HttpEntity","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"ResponseHeaders","t":"type ResponseHeaders[A] = A => Seq[(String, String)]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"type"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"choiceRequestEntity","t":"def choiceRequestEntity[A, B](requestEntityA: () => A, requestEntityB: () => B): () => Either[A, B]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"choiceResponse","t":"def choiceResponse[A, B](responseA: () => A, responseB: () => B): () => Either[A, B]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"emptyRequest","t":"val emptyRequest: () => Unit","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"emptyRequestHeaders","t":"val emptyRequestHeaders: () => Unit","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"emptyResponse","t":"def emptyResponse: () => Unit","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"emptyResponseHeaders","t":"def emptyResponseHeaders: () => Unit","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"endpoint","t":"def endpoint[A, B](request: Request[A], response: () => B, docs: EndpointDocs): Endpoint[A, B]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"handleServerError","t":"def handleServerError(throwable: Throwable): Result","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"htmlResponse","t":"val htmlResponse: () => Html","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"invariantFunctorRequest","t":"val invariantFunctorRequest: InvariantFunctor[[A] =>> Request[A]]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"optRequestHeader","t":"def optRequestHeader(name: String, docs: Option[String]): Headers => Validated[Option[String]]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"optResponseHeader","t":"def optResponseHeader(name: String, docs: Documentation): () => Option[String]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"playComponents","t":"val playComponents: PlayComponents","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"redirect","t":"def redirect[A](other: => Endpoint[A, _])(args: A): () => Unit","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"request","t":"def request[A, B, C, AB, Out](method: Method, url: Url[A], entity: () => B, docs: Documentation, headers: () => C)(implicit tuplerAB: Aux[A, B, AB], tuplerABC: Aux[AB, C, Out]): Request[Out]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"requestEntityPartialInvariantFunctor","t":"def requestEntityPartialInvariantFunctor: PartialInvariantFunctor[RequestEntity]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"requestHeader","t":"def requestHeader(name: String, docs: Option[String]): Headers => Validated[String]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"requestHeadersPartialInvariantFunctor","t":"val requestHeadersPartialInvariantFunctor: PartialInvariantFunctor[RequestHeaders]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"requestHeadersSemigroupal","t":"val requestHeadersSemigroupal: Semigroupal[RequestHeaders]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"requestPartialInvariantFunctor","t":"def requestPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> Request[A]]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"response","t":"def response[A, B, R](statusCode: StatusCode, entity: () => A, docs: Documentation, headers: () => B)(implicit tupler: Aux[A, B, R]): () => R","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"responseEntityInvariantFunctor","t":"val responseEntityInvariantFunctor: InvariantFunctor[ResponseEntity]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"responseHeader","t":"def responseHeader(name: String, docs: Documentation): () => String","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"responseHeadersInvariantFunctor","t":"def responseHeadersInvariantFunctor: InvariantFunctor[ResponseHeaders]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"responseHeadersSemigroupal","t":"def responseHeadersSemigroupal: Semigroupal[ResponseHeaders]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"responseInvariantFunctor","t":"val responseInvariantFunctor: InvariantFunctor[Response]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"routesFromEndpoints","t":"def routesFromEndpoints(endpoints: ToPlayHandler*): PartialFunction[RequestHeader, Handler]","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"textRequest","t":"val textRequest: () => String","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"val"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors.html","n":"textResponse","t":"def textResponse: () => String","d":"endpoints4s/play/server/EndpointsWithCustomErrors","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Endpoint.html","n":"Endpoint","t":"class Endpoint[A, B](request: Request[A], response: () => B)","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Endpoint","k":"class"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Endpoint.html","n":"call","t":"def call(a: A): Call","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Endpoint","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Endpoint.html","n":"implementedBy","t":"def implementedBy(service: A => B): EndpointWithHandler[A, B]","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Endpoint","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Endpoint.html","n":"implementedByAsync","t":"def implementedByAsync(service: A => Future[B]): EndpointWithHandler[A, B]","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Endpoint","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$EndpointWithHandler.html","n":"EndpointWithHandler","t":"class EndpointWithHandler[A, B](endpoint: Endpoint[A, B], service: A => Future[B]) extends ToPlayHandler","d":"endpoints4s/play/server/EndpointsWithCustomErrors$EndpointWithHandler","k":"class"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$EndpointWithHandler.html","n":"playHandler","t":"def playHandler(header: RequestHeader): Option[Handler]","d":"endpoints4s/play/server/EndpointsWithCustomErrors$EndpointWithHandler","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"Request","t":"trait Request[A]","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"trait"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"EntityData","t":"type EntityData","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"type"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"HeadersData","t":"type HeadersData","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"type"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"UrlData","t":"type UrlData","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"type"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"aggregateAndValidate","t":"def aggregateAndValidate(urlData: UrlData, headersData: HeadersData, entityData: EntityData): Validated[A]","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"encode","t":"def encode(a: A): Call","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"entity","t":"def entity: () => EntityData","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"headers","t":"def headers: () => HeadersData","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"matchRequest","t":"def matchRequest(requestHeader: RequestHeader): Option[() => A]","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"matchRequestAndParseHeaders","t":"def matchRequestAndParseHeaders(requestHeader: RequestHeader)(entity: (UrlData, HeadersData) => () => A): Option[() => A]","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"method","t":"def method: Method","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"url","t":"def url: Url[UrlData]","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$Request.html","n":"urlData","t":"def urlData(a: A): UrlData","d":"endpoints4s/play/server/EndpointsWithCustomErrors$Request","k":"def"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$ToPlayHandler.html","n":"ToPlayHandler","t":"trait ToPlayHandler","d":"endpoints4s/play/server/EndpointsWithCustomErrors$ToPlayHandler","k":"trait"},
{"l":"api/endpoints4s/play/server/EndpointsWithCustomErrors$ToPlayHandler.html","n":"playHandler","t":"def playHandler(header: RequestHeader): Option[Handler]","d":"endpoints4s/play/server/EndpointsWithCustomErrors$ToPlayHandler","k":"def"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromCodecs.html","n":"JsonEntitiesFromCodecs","t":"trait JsonEntitiesFromCodecs extends JsonEntitiesFromCodecs with EndpointsWithCustomErrors","d":"endpoints4s/play/server/JsonEntitiesFromCodecs","k":"trait"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromCodecs.html","n":"jsonRequest","t":"def jsonRequest[A](implicit codec: JsonCodec[A]): () => A","d":"endpoints4s/play/server/JsonEntitiesFromCodecs","k":"def"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromCodecs.html","n":"jsonResponse","t":"def jsonResponse[A](implicit codec: JsonCodec[A]): () => A","d":"endpoints4s/play/server/JsonEntitiesFromCodecs","k":"def"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders.html","n":"JsonEntitiesFromEncodersAndDecoders","t":"trait JsonEntitiesFromEncodersAndDecoders extends JsonEntities with EndpointsWithCustomErrors","d":"endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders","k":"trait"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders.html","n":"JsonRequest","t":"type JsonRequest[A] = Decoder[String, A]","d":"endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders","k":"type"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders.html","n":"JsonResponse","t":"type JsonResponse[A] = Encoder[A, String]","d":"endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders","k":"type"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders.html","n":"jsonRequest","t":"def jsonRequest[A](implicit decoder: JsonRequest[A]): () => A","d":"endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders","k":"def"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders.html","n":"jsonResponse","t":"def jsonResponse[A](implicit encoder: JsonResponse[A]): () => A","d":"endpoints4s/play/server/JsonEntitiesFromEncodersAndDecoders","k":"def"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromSchemas.html","n":"JsonEntitiesFromSchemas","t":"trait JsonEntitiesFromSchemas extends JsonEntitiesFromSchemas with JsonEntitiesFromCodecs with JsonSchemas","d":"endpoints4s/play/server/JsonEntitiesFromSchemas","k":"trait"},
{"l":"api/endpoints4s/play/server/JsonEntitiesFromSchemas.html","n":"stringCodec","t":"def stringCodec[A](implicit codec: JsonSchema[A]): Codec[String, A]","d":"endpoints4s/play/server/JsonEntitiesFromSchemas","k":"def"},
{"l":"api/endpoints4s/play/server/LowLevelEndpoints.html","n":"LowLevelEndpoints","t":"trait LowLevelEndpoints extends LowLevelEndpoints with Endpoints","d":"endpoints4s/play/server/LowLevelEndpoints","k":"trait"},
{"l":"api/endpoints4s/play/server/LowLevelEndpoints.html","n":"RawRequestEntity","t":"type RawRequestEntity = Request[AnyContent]","d":"endpoints4s/play/server/LowLevelEndpoints","k":"type"},
{"l":"api/endpoints4s/play/server/LowLevelEndpoints.html","n":"RawResponseEntity","t":"type RawResponseEntity = Result","d":"endpoints4s/play/server/LowLevelEndpoints","k":"type"},
{"l":"api/endpoints4s/play/server/LowLevelEndpoints.html","n":"rawRequestEntity","t":"val rawRequestEntity: () => Request[AnyContent]","d":"endpoints4s/play/server/LowLevelEndpoints","k":"val"},
{"l":"api/endpoints4s/play/server/LowLevelEndpoints.html","n":"rawResponseEntity","t":"val rawResponseEntity: Result => Result","d":"endpoints4s/play/server/LowLevelEndpoints","k":"val"},
{"l":"api/endpoints4s/play/server/Methods.html","n":"Methods","t":"trait Methods extends Methods","d":"endpoints4s/play/server/Methods","k":"trait"},
{"l":"api/endpoints4s/play/server/Methods.html","n":"Delete","t":"def Delete: Method","d":"endpoints4s/play/server/Methods","k":"def"},
{"l":"api/endpoints4s/play/server/Methods.html","n":"Get","t":"def Get: Method","d":"endpoints4s/play/server/Methods","k":"def"},
{"l":"api/endpoints4s/play/server/Methods.html","n":"Options","t":"def Options: Method","d":"endpoints4s/play/server/Methods","k":"def"},
{"l":"api/endpoints4s/play/server/Methods.html","n":"Patch","t":"def Patch: Method","d":"endpoints4s/play/server/Methods","k":"def"},
{"l":"api/endpoints4s/play/server/Methods.html","n":"Post","t":"def Post: Method","d":"endpoints4s/play/server/Methods","k":"def"},
{"l":"api/endpoints4s/play/server/Methods.html","n":"Put","t":"def Put: Method","d":"endpoints4s/play/server/Methods","k":"def"},
{"l":"api/endpoints4s/play/server/Methods$Method.html","n":"Method","t":"class Method(value: String)","d":"endpoints4s/play/server/Methods$Method","k":"class"},
{"l":"api/endpoints4s/play/server/Methods$Method.html","n":"matches","t":"def matches(requestHeader: RequestHeader): Boolean","d":"endpoints4s/play/server/Methods$Method","k":"def"},
{"l":"api/endpoints4s/play/server/MuxEndpoints.html","n":"MuxEndpoints","t":"trait MuxEndpoints extends MuxEndpoints with EndpointsWithCustomErrors","d":"endpoints4s/play/server/MuxEndpoints","k":"trait"},
{"l":"api/endpoints4s/play/server/MuxEndpoints.html","n":"muxEndpoint","t":"def muxEndpoint[Req <: MuxRequest, Resp, Transport](request: Request[Transport], response: Transport => Result): MuxEndpoint[Req, Resp, Transport]","d":"endpoints4s/play/server/MuxEndpoints","k":"def"},
{"l":"api/endpoints4s/play/server/MuxEndpoints$MuxEndpoint.html","n":"MuxEndpoint","t":"class MuxEndpoint[Req <: MuxRequest, Resp, Transport](request: Request[Transport], response: () => Transport)","d":"endpoints4s/play/server/MuxEndpoints$MuxEndpoint","k":"class"},
{"l":"api/endpoints4s/play/server/MuxEndpoints$MuxEndpoint.html","n":"implementedBy","t":"def implementedBy(handler: MuxHandler[Req, Resp])(implicit decoder: Decoder[Transport, Req], encoder: Encoder[Resp, Transport]): ToPlayHandler","d":"endpoints4s/play/server/MuxEndpoints$MuxEndpoint","k":"def"},
{"l":"api/endpoints4s/play/server/MuxEndpoints$MuxEndpoint.html","n":"implementedByAsync","t":"def implementedByAsync(handler: MuxHandlerAsync[Req, Resp])(implicit decoder: Decoder[Transport, Req], encoder: Encoder[Resp, Transport]): ToPlayHandler","d":"endpoints4s/play/server/MuxEndpoints$MuxEndpoint","k":"def"},
{"l":"api/endpoints4s/play/server/MuxEndpoints$MuxEndpoint.html","n":"toPlayHandler","t":"def toPlayHandler(handler: Req { type Response = Resp;  } => Future[Resp])(implicit decoder: Decoder[Transport, Req], encoder: Encoder[Resp, Transport]): ToPlayHandler","d":"endpoints4s/play/server/MuxEndpoints$MuxEndpoint","k":"def"},
{"l":"api/endpoints4s/play/server/MuxHandler.html","n":"MuxHandler","t":"trait MuxHandler[Req <: MuxRequest, Resp]","d":"endpoints4s/play/server/MuxHandler","k":"trait"},
{"l":"api/endpoints4s/play/server/MuxHandler.html","n":"apply","t":"def apply[R <: Resp](req: Req { type Response = R;  }): R","d":"endpoints4s/play/server/MuxHandler","k":"def"},
{"l":"api/endpoints4s/play/server/MuxHandlerAsync.html","n":"MuxHandlerAsync","t":"trait MuxHandlerAsync[Req <: MuxRequest, Resp]","d":"endpoints4s/play/server/MuxHandlerAsync","k":"trait"},
{"l":"api/endpoints4s/play/server/MuxHandlerAsync.html","n":"apply","t":"def apply[R <: Resp](req: Req { type Response = R;  }): Future[R]","d":"endpoints4s/play/server/MuxHandlerAsync","k":"def"},
{"l":"api/endpoints4s/play/server/PlayComponents.html","n":"PlayComponents","t":"trait PlayComponents","d":"endpoints4s/play/server/PlayComponents","k":"trait"},
{"l":"api/endpoints4s/play/server/PlayComponents.html","n":"defaultActionBuilder","t":"def defaultActionBuilder: DefaultActionBuilder","d":"endpoints4s/play/server/PlayComponents","k":"def"},
{"l":"api/endpoints4s/play/server/PlayComponents.html","n":"executionContext","t":"def executionContext: ExecutionContext","d":"endpoints4s/play/server/PlayComponents","k":"def"},
{"l":"api/endpoints4s/play/server/PlayComponents.html","n":"fileMimeTypes","t":"def fileMimeTypes: FileMimeTypes","d":"endpoints4s/play/server/PlayComponents","k":"def"},
{"l":"api/endpoints4s/play/server/PlayComponents.html","n":"httpErrorHandler","t":"def httpErrorHandler: HttpErrorHandler","d":"endpoints4s/play/server/PlayComponents","k":"def"},
{"l":"api/endpoints4s/play/server/PlayComponents.html","n":"playBodyParsers","t":"def playBodyParsers: PlayBodyParsers","d":"endpoints4s/play/server/PlayComponents","k":"def"},
{"l":"api/endpoints4s/play/server/PlayComponents$.html","n":"PlayComponents","t":"object PlayComponents","d":"endpoints4s/play/server/PlayComponents$","k":"object"},
{"l":"api/endpoints4s/play/server/PlayComponents$.html","n":"fromBuiltInComponents","t":"def fromBuiltInComponents(builtInComponents: BuiltInComponents): PlayComponents","d":"endpoints4s/play/server/PlayComponents$","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"StatusCodes","t":"trait StatusCodes extends StatusCodes","d":"endpoints4s/play/server/StatusCodes","k":"trait"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"Accepted","t":"def Accepted: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"BadRequest","t":"def BadRequest: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"Created","t":"def Created: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"Forbidden","t":"def Forbidden: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"InternalServerError","t":"def InternalServerError: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"NoContent","t":"def NoContent: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"NotFound","t":"def NotFound: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"NotImplemented","t":"def NotImplemented: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"OK","t":"def OK: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"PayloadTooLarge","t":"def PayloadTooLarge: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"StatusCode","t":"type StatusCode = Status","d":"endpoints4s/play/server/StatusCodes","k":"type"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"TooManyRequests","t":"def TooManyRequests: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/StatusCodes.html","n":"Unauthorized","t":"def Unauthorized: StatusCode","d":"endpoints4s/play/server/StatusCodes","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"Urls","t":"trait Urls extends Urls","d":"endpoints4s/play/server/Urls","k":"trait"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"RequestExtractor","t":"type RequestExtractor[A] = RequestHeader => Option[A]","d":"endpoints4s/play/server/Urls","k":"type"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"WithDefault","t":"type WithDefault[A] = A","d":"endpoints4s/play/server/Urls","k":"type"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"applicativeRequestExtractor","t":"val applicativeRequestExtractor: Applicative[RequestExtractor]","d":"endpoints4s/play/server/Urls","k":"val"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"chainPaths","t":"def chainPaths[A, B](first: Path[A], second: Path[B])(implicit tupler: Tupler[A, B]): Path[Out]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"combineQueryStrings","t":"def combineQueryStrings[A, B](first: QueryString[A], second: QueryString[B])(implicit tupler: Tupler[A, B]): QueryString[Out]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"functorRequestExtractor","t":"val functorRequestExtractor: Functor[RequestExtractor]","d":"endpoints4s/play/server/Urls","k":"val"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"handleClientErrors","t":"def handleClientErrors(invalid: Invalid): Result","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"optionalQueryStringParam","t":"def optionalQueryStringParam[A](implicit param: QueryStringParam[A]): QueryStringParam[Option[A]]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"pathPartialInvariantFunctor","t":"val pathPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> Path[A]]","d":"endpoints4s/play/server/Urls","k":"val"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"qs","t":"def qs[A](name: String, docs: Documentation)(implicit value: QueryStringParam[A]): QueryString[A]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"queryStringParamPartialInvariantFunctor","t":"val queryStringParamPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> QueryStringParam[A]]","d":"endpoints4s/play/server/Urls","k":"val"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"queryStringPartialInvariantFunctor","t":"val queryStringPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> QueryString[A]]","d":"endpoints4s/play/server/Urls","k":"val"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"remainingSegments","t":"def remainingSegments(name: String, docs: Documentation): Path[String]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"repeatedQueryStringParam","t":"def repeatedQueryStringParam[A, CC <: ([X] =>> Iterable[X])](implicit param: QueryStringParam[A], factory: Factory[A, CC[A]]): QueryStringParam[CC[A]]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"segment","t":"def segment[A](name: String, docs: Documentation)(implicit A: Segment[A]): Path[A]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"segmentPartialInvariantFunctor","t":"val segmentPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> Segment[A]]","d":"endpoints4s/play/server/Urls","k":"val"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"staticPathSegment","t":"def staticPathSegment(segment: String): Path[Unit]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"stringQueryString","t":"val stringQueryString: QueryStringParam[String]","d":"endpoints4s/play/server/Urls","k":"val"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"stringSegment","t":"def stringSegment: Segment[String]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"urlPartialInvariantFunctor","t":"val urlPartialInvariantFunctor: PartialInvariantFunctor[[A] =>> Url[A]]","d":"endpoints4s/play/server/Urls","k":"val"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"urlWithQueryString","t":"def urlWithQueryString[A, B](path: Path[A], qs: QueryString[B])(implicit tupler: Tupler[A, B]): Url[Out]","d":"endpoints4s/play/server/Urls","k":"def"},
{"l":"api/endpoints4s/play/server/Urls.html","n":"utf8Name","t":"val utf8Name: String","d":"endpoints4s/play/server/Urls","k":"val"},
{"l":"api/endpoints4s/play/server/Urls$ApplicativeMapSyntax.html","n":"ApplicativeMapSyntax","t":"class ApplicativeMapSyntax[F[_], A](fa: F[A])","d":"endpoints4s/play/server/Urls$ApplicativeMapSyntax","k":"class"},
{"l":"api/endpoints4s/play/server/Urls$ApplicativeMapSyntax.html","n":"map","t":"def map[B](f: A => B)(implicit applicative: Applicative[F]): F[B]","d":"endpoints4s/play/server/Urls$ApplicativeMapSyntax","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$Path.html","n":"Path","t":"trait Path[A] extends Url[A]","d":"endpoints4s/play/server/Urls$Path","k":"trait"},
{"l":"api/endpoints4s/play/server/Urls$Path.html","n":"decode","t":"def decode(segments: List[String]): Option[(Validated[A], List[String])]","d":"endpoints4s/play/server/Urls$Path","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$Path.html","n":"decodeUrl","t":"def decodeUrl(request: RequestHeader): Option[Validated[A]]","d":"endpoints4s/play/server/Urls$Path","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$Path.html","n":"encode","t":"def encode(a: A): Seq[String]","d":"endpoints4s/play/server/Urls$Path","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$Path.html","n":"encodeUrlComponents","t":"def encodeUrlComponents(a: A): (Seq[String], Map[String, Seq[String]])","d":"endpoints4s/play/server/Urls$Path","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$QueryString.html","n":"QueryString","t":"trait QueryString[A]","d":"endpoints4s/play/server/Urls$QueryString","k":"trait"},
{"l":"api/endpoints4s/play/server/Urls$QueryString.html","n":"decode","t":"def decode(qs: Map[String, Seq[String]]): Validated[A]","d":"endpoints4s/play/server/Urls$QueryString","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$QueryString.html","n":"encode","t":"def encode(a: A): Map[String, Seq[String]]","d":"endpoints4s/play/server/Urls$QueryString","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$QueryStringParam.html","n":"QueryStringParam","t":"trait QueryStringParam[A]","d":"endpoints4s/play/server/Urls$QueryStringParam","k":"trait"},
{"l":"api/endpoints4s/play/server/Urls$QueryStringParam.html","n":"decode","t":"def decode(name: String, qs: Map[String, Seq[String]]): Validated[A]","d":"endpoints4s/play/server/Urls$QueryStringParam","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$QueryStringParam.html","n":"encode","t":"def encode(name: String, a: A): Map[String, Seq[String]]","d":"endpoints4s/play/server/Urls$QueryStringParam","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$Segment.html","n":"Segment","t":"trait Segment[A]","d":"endpoints4s/play/server/Urls$Segment","k":"trait"},
{"l":"api/endpoints4s/play/server/Urls$Segment.html","n":"decode","t":"def decode(segment: String): Validated[A]","d":"endpoints4s/play/server/Urls$Segment","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$Segment.html","n":"encode","t":"def encode(a: A): String","d":"endpoints4s/play/server/Urls$Segment","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$Url.html","n":"Url","t":"trait Url[A]","d":"endpoints4s/play/server/Urls$Url","k":"trait"},
{"l":"api/endpoints4s/play/server/Urls$Url.html","n":"decodeUrl","t":"def decodeUrl(req: RequestHeader): Option[Validated[A]]","d":"endpoints4s/play/server/Urls$Url","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$Url.html","n":"encodeUrl","t":"def encodeUrl(a: A): String","d":"endpoints4s/play/server/Urls$Url","k":"def"},
{"l":"api/endpoints4s/play/server/Urls$Url.html","n":"encodeUrlComponents","t":"def encodeUrlComponents(a: A): (Seq[String], Map[String, Seq[String]])","d":"endpoints4s/play/server/Urls$Url","k":"def"},
{"l":"docs/index.html","n":"play-server","t":"play-server","d":"","k":"static"}];