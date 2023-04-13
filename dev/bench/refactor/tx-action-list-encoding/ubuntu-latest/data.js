window.BENCHMARK_DATA = {
  "lastUpdate": 1681366954717,
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
      }
    ]
  }
}