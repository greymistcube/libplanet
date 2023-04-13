window.BENCHMARK_DATA = {
  "lastUpdate": 1681366637491,
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
      }
    ]
  }
}