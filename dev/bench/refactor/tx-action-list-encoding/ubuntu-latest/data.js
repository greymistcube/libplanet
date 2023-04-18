window.BENCHMARK_DATA = {
  "lastUpdate": 1681814577965,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "51dfc21a6b04ab2184fbfaa40eb26a9dae87de92",
          "message": "Fixed tests",
          "timestamp": "2023-04-13T15:02:17+09:00",
          "tree_id": "e43cc05b11d1f369aa309d83d657bf0db17a5cc8",
          "url": "https://github.com/greymistcube/libplanet/commit/51dfc21a6b04ab2184fbfaa40eb26a9dae87de92"
        },
        "date": 1681366630928,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8102580,
            "unit": "ns",
            "range": "± 253387.97779768478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21596870.285714287,
            "unit": "ns",
            "range": "± 189096.81176071143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55038686.2,
            "unit": "ns",
            "range": "± 582138.330011887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106766818.4,
            "unit": "ns",
            "range": "± 1758661.5442438768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214002667.2142857,
            "unit": "ns",
            "range": "± 2644122.731152889"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51232.156626506025,
            "unit": "ns",
            "range": "± 2741.427096230986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1454488.3263157895,
            "unit": "ns",
            "range": "± 99652.38574937041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2727223.588235294,
            "unit": "ns",
            "range": "± 85554.5749445728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2384907.476923077,
            "unit": "ns",
            "range": "± 108799.7934525423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6066344.5,
            "unit": "ns",
            "range": "± 217674.13195946108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6013608.175223215,
            "unit": "ns",
            "range": "± 35625.64646577552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900974.463671875,
            "unit": "ns",
            "range": "± 1911.456139917679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365337.51640625,
            "unit": "ns",
            "range": "± 3960.3004877586295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633899.406510417,
            "unit": "ns",
            "range": "± 11307.453163205635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823584.6874348958,
            "unit": "ns",
            "range": "± 975.2722504821127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762829.2625651042,
            "unit": "ns",
            "range": "± 516.8052815232115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340751.3181818182,
            "unit": "ns",
            "range": "± 8235.62881854182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283184.2727272727,
            "unit": "ns",
            "range": "± 10185.858766329475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237996.1052631579,
            "unit": "ns",
            "range": "± 8031.712879106423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5813268.866666666,
            "unit": "ns",
            "range": "± 44122.86204592591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3950051.947368421,
            "unit": "ns",
            "range": "± 83302.3997650019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20792.915789473685,
            "unit": "ns",
            "range": "± 1772.8029835165164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96978.13580246913,
            "unit": "ns",
            "range": "± 5094.822498755689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83092.1836734694,
            "unit": "ns",
            "range": "± 6284.433902196036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117949.08163265306,
            "unit": "ns",
            "range": "± 16760.86125390485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7318,
            "unit": "ns",
            "range": "± 843.3420723904563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19817.967741935485,
            "unit": "ns",
            "range": "± 1887.1861872824963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3397908.2093023257,
            "unit": "ns",
            "range": "± 125810.95505058716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3665787.761904762,
            "unit": "ns",
            "range": "± 84974.781753709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4269249.354838709,
            "unit": "ns",
            "range": "± 129100.74853760492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4515621.209302326,
            "unit": "ns",
            "range": "± 165505.64172408977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7205663.4375,
            "unit": "ns",
            "range": "± 140800.38183469474"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "0ef3738ad8ffc1b75e1a21ea1ea2340406b9e50c",
          "message": "Fixed tests",
          "timestamp": "2023-04-13T15:05:46+09:00",
          "tree_id": "76239a8c7da7fb35e196c51fb924344225f6d6c6",
          "url": "https://github.com/greymistcube/libplanet/commit/0ef3738ad8ffc1b75e1a21ea1ea2340406b9e50c"
        },
        "date": 1681366945044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9430768.266666668,
            "unit": "ns",
            "range": "± 169078.63192164537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27161620.466666665,
            "unit": "ns",
            "range": "± 409712.9490374706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67474058.2,
            "unit": "ns",
            "range": "± 299284.14254355105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137802691.6875,
            "unit": "ns",
            "range": "± 2523589.0479658977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274528714.73333335,
            "unit": "ns",
            "range": "± 5109752.564972153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57601.87777777778,
            "unit": "ns",
            "range": "± 4341.63577320128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1711886.3370786516,
            "unit": "ns",
            "range": "± 94583.58773760333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3255133.8933333335,
            "unit": "ns",
            "range": "± 164475.21884158862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2717335.1375,
            "unit": "ns",
            "range": "± 141245.89266256258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7054660.38,
            "unit": "ns",
            "range": "± 508530.7500675633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6922538.165364583,
            "unit": "ns",
            "range": "± 78770.94722945994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2151795.900520833,
            "unit": "ns",
            "range": "± 29148.303026612935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1604681.42890625,
            "unit": "ns",
            "range": "± 26183.01509493748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3056641.18203125,
            "unit": "ns",
            "range": "± 38946.63964299923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 956654.4224934896,
            "unit": "ns",
            "range": "± 13410.018012290255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908339.6697916667,
            "unit": "ns",
            "range": "± 4146.302647646865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389555.0675675676,
            "unit": "ns",
            "range": "± 19326.121326932553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335952.67741935485,
            "unit": "ns",
            "range": "± 9938.633646489832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287902.8813559322,
            "unit": "ns",
            "range": "± 12596.317995247859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6837133.208333333,
            "unit": "ns",
            "range": "± 176168.08397688027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4752550.928571428,
            "unit": "ns",
            "range": "± 82474.78615493464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24912.195652173912,
            "unit": "ns",
            "range": "± 2023.1264524537883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112288.72340425532,
            "unit": "ns",
            "range": "± 7300.9035961668205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102317.36363636363,
            "unit": "ns",
            "range": "± 8311.045827329453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131052.51041666667,
            "unit": "ns",
            "range": "± 16481.53967832834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8429.329896907217,
            "unit": "ns",
            "range": "± 966.6717031655736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24017.063157894736,
            "unit": "ns",
            "range": "± 2340.3202945483827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4220856.340425532,
            "unit": "ns",
            "range": "± 147025.9435205195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4434898.071428572,
            "unit": "ns",
            "range": "± 50375.95349197149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5117131.0869565215,
            "unit": "ns",
            "range": "± 123039.33449138532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5434501.806451613,
            "unit": "ns",
            "range": "± 163007.41842207048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8623944.17857143,
            "unit": "ns",
            "range": "± 243193.30953593482"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "8a18bee5c4821201907fb22c1dab7c2d8ee38026",
          "message": "Changelog",
          "timestamp": "2023-04-13T15:30:07+09:00",
          "tree_id": "4ae542b5c594ed531377b8b968d3af2c4b0253b5",
          "url": "https://github.com/greymistcube/libplanet/commit/8a18bee5c4821201907fb22c1dab7c2d8ee38026"
        },
        "date": 1681368238851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7795024.055555556,
            "unit": "ns",
            "range": "± 158228.6211922751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21199050.333333332,
            "unit": "ns",
            "range": "± 288149.8337957595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52380935.6,
            "unit": "ns",
            "range": "± 615465.0591337763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106353189.46666667,
            "unit": "ns",
            "range": "± 1900676.7506619797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210561781.7142857,
            "unit": "ns",
            "range": "± 2748303.5532149486"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48236.709677419356,
            "unit": "ns",
            "range": "± 3491.253096888818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1454548.47,
            "unit": "ns",
            "range": "± 116339.5477752714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2683951.0625,
            "unit": "ns",
            "range": "± 82932.01696529183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2306445.515789474,
            "unit": "ns",
            "range": "± 128204.60253752826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5560379.827586207,
            "unit": "ns",
            "range": "± 153225.12169169096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5802750.918229166,
            "unit": "ns",
            "range": "± 21012.196794570984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926135.2230747768,
            "unit": "ns",
            "range": "± 2344.772805278386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357627.3003627232,
            "unit": "ns",
            "range": "± 2278.0818487766383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606455.2938058036,
            "unit": "ns",
            "range": "± 3660.6063316432596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816841.1805338542,
            "unit": "ns",
            "range": "± 811.7663632658125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764746.8450055803,
            "unit": "ns",
            "range": "± 527.1799838228014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330466.6206896552,
            "unit": "ns",
            "range": "± 8730.456032164451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278788.63636363635,
            "unit": "ns",
            "range": "± 6388.60661867191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232841.64,
            "unit": "ns",
            "range": "± 6081.487118570041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5795895.928571428,
            "unit": "ns",
            "range": "± 54784.10353302847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3900605.7333333334,
            "unit": "ns",
            "range": "± 68066.7766561072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19295.34375,
            "unit": "ns",
            "range": "± 1328.2579475873454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90545.25287356322,
            "unit": "ns",
            "range": "± 4966.655620393917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77932.11940298507,
            "unit": "ns",
            "range": "± 3707.4144773330963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108221.9247311828,
            "unit": "ns",
            "range": "± 12927.751635646806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6139.105263157895,
            "unit": "ns",
            "range": "± 641.7341776461953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18682.896907216495,
            "unit": "ns",
            "range": "± 1505.0908990028372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335031.1296296297,
            "unit": "ns",
            "range": "± 139190.67670564482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3532338.0454545454,
            "unit": "ns",
            "range": "± 162726.46133666075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4191669.4444444445,
            "unit": "ns",
            "range": "± 74884.707224013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4486268.511111111,
            "unit": "ns",
            "range": "± 165346.9271751234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7075371,
            "unit": "ns",
            "range": "± 102022.72147641693"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "bdbe05e02a712e273e1db69240b50438da08b2bb",
          "message": "Changelog",
          "timestamp": "2023-04-14T17:57:57+09:00",
          "tree_id": "90dd6320f117a4f0d35e0286c0caae6052875fb4",
          "url": "https://github.com/greymistcube/libplanet/commit/bdbe05e02a712e273e1db69240b50438da08b2bb"
        },
        "date": 1681463492330,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7834036.133333334,
            "unit": "ns",
            "range": "± 75810.47696616936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19956647.466666665,
            "unit": "ns",
            "range": "± 64723.964373844305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50292968.8,
            "unit": "ns",
            "range": "± 458371.4227104478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100878216,
            "unit": "ns",
            "range": "± 549547.1612362829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203561672.92307693,
            "unit": "ns",
            "range": "± 525017.226403963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48828.35106382979,
            "unit": "ns",
            "range": "± 2986.7072519351973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405570.3263157895,
            "unit": "ns",
            "range": "± 103153.6864519462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2620296.3,
            "unit": "ns",
            "range": "± 76388.29709390632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2209509.3538461537,
            "unit": "ns",
            "range": "± 94223.22746814323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5450518.7727272725,
            "unit": "ns",
            "range": "± 128414.04010351747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6012350.267578125,
            "unit": "ns",
            "range": "± 11230.219630873391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841110.636328125,
            "unit": "ns",
            "range": "± 2142.708199869601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359729.8798177084,
            "unit": "ns",
            "range": "± 564.7132696018772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553946.350167411,
            "unit": "ns",
            "range": "± 1317.0638223316428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825550.5005859375,
            "unit": "ns",
            "range": "± 582.9776887451998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741527.1357421875,
            "unit": "ns",
            "range": "± 351.338348072089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342320.3404255319,
            "unit": "ns",
            "range": "± 12994.815854754635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283342.2068965517,
            "unit": "ns",
            "range": "± 8137.669341574888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248012.76712328766,
            "unit": "ns",
            "range": "± 12047.751232676565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5595184.333333333,
            "unit": "ns",
            "range": "± 53852.49357891115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3922972.214285714,
            "unit": "ns",
            "range": "± 31534.270539985715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18875.382978723403,
            "unit": "ns",
            "range": "± 1432.6802095837602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88533.8085106383,
            "unit": "ns",
            "range": "± 5061.2933624294055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76676.74736842106,
            "unit": "ns",
            "range": "± 4316.1497592193155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102987.65979381443,
            "unit": "ns",
            "range": "± 10764.633998545305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5668.306122448979,
            "unit": "ns",
            "range": "± 591.1038495840278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20862.333333333332,
            "unit": "ns",
            "range": "± 2165.921253691598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361989,
            "unit": "ns",
            "range": "± 102190.61272119536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3474002.1428571427,
            "unit": "ns",
            "range": "± 80305.87996796107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4376034.066666666,
            "unit": "ns",
            "range": "± 76281.92209023677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4474392.235294118,
            "unit": "ns",
            "range": "± 142796.55994138823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7342239.555555556,
            "unit": "ns",
            "range": "± 131106.95657776887"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "38fb28d4ea7ce9a98de192046f7a00725f6808ab",
          "message": "Changelog",
          "timestamp": "2023-04-18T19:28:20+09:00",
          "tree_id": "4b290fa35c7819ed5366a09168097282f1c76f08",
          "url": "https://github.com/greymistcube/libplanet/commit/38fb28d4ea7ce9a98de192046f7a00725f6808ab"
        },
        "date": 1681814570961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8038270.733333333,
            "unit": "ns",
            "range": "± 108358.95304856425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21824928.35714286,
            "unit": "ns",
            "range": "± 303533.7279582736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57450814.733333334,
            "unit": "ns",
            "range": "± 304755.554840378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108438996.21428572,
            "unit": "ns",
            "range": "± 1305111.1413788705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216682363.73333332,
            "unit": "ns",
            "range": "± 2122839.4479432986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53322.234042553195,
            "unit": "ns",
            "range": "± 4009.566008814882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1491501.8969072164,
            "unit": "ns",
            "range": "± 94131.22634093107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2771481.5319148935,
            "unit": "ns",
            "range": "± 107210.31748610665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2422508.3896103897,
            "unit": "ns",
            "range": "± 119151.88635200428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6309084.09,
            "unit": "ns",
            "range": "± 387109.0658016421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6046004.450520833,
            "unit": "ns",
            "range": "± 35274.5901339637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861229.3706752232,
            "unit": "ns",
            "range": "± 2218.5295411209363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369704.3893229167,
            "unit": "ns",
            "range": "± 3986.5983754723397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615332.3625,
            "unit": "ns",
            "range": "± 3122.986232433262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818630.7419782366,
            "unit": "ns",
            "range": "± 1621.6476013369956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753488.9852213542,
            "unit": "ns",
            "range": "± 201.49296046406474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350559.15789473685,
            "unit": "ns",
            "range": "± 3780.898780025104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283953.28169014084,
            "unit": "ns",
            "range": "± 13765.282373921824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237033.2857142857,
            "unit": "ns",
            "range": "± 7346.884107731452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5846352.5,
            "unit": "ns",
            "range": "± 45636.40443557854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3899216.5714285714,
            "unit": "ns",
            "range": "± 46373.112933970835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22467.821052631578,
            "unit": "ns",
            "range": "± 2065.1512539472096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109459.25,
            "unit": "ns",
            "range": "± 7951.176253267583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100186.5306122449,
            "unit": "ns",
            "range": "± 10170.842682402834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133144.55670103093,
            "unit": "ns",
            "range": "± 14969.389383678581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7900.145833333333,
            "unit": "ns",
            "range": "± 1248.1363452778342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21293.052631578947,
            "unit": "ns",
            "range": "± 2222.111452135353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3488463.5384615385,
            "unit": "ns",
            "range": "± 91730.6015374284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3764397.3571428573,
            "unit": "ns",
            "range": "± 65000.66837361354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4300097.3125,
            "unit": "ns",
            "range": "± 84111.94686267324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4708599.7272727275,
            "unit": "ns",
            "range": "± 115355.49008883958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7759241.305555556,
            "unit": "ns",
            "range": "± 256909.03906322498"
          }
        ]
      }
    ]
  }
}