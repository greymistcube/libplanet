window.BENCHMARK_DATA = {
  "lastUpdate": 1684156285675,
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
          "id": "01bd4c5391da7022b66b58765776ae29d625d812",
          "message": "Removed IActionContext.GenesisHash",
          "timestamp": "2023-05-15T21:44:10+09:00",
          "tree_id": "8a6032b5d34baaf40369f884b9f534f1e8f0171a",
          "url": "https://github.com/greymistcube/libplanet/commit/01bd4c5391da7022b66b58765776ae29d625d812"
        },
        "date": 1684156266361,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9061429.354166666,
            "unit": "ns",
            "range": "± 520331.1478856311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22545963.344444446,
            "unit": "ns",
            "range": "± 1254435.7007859962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54454221.6625,
            "unit": "ns",
            "range": "± 2840875.897869519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103209506.27536231,
            "unit": "ns",
            "range": "± 4116394.6411537156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217492538.65384614,
            "unit": "ns",
            "range": "± 5927488.650330539"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77934.95555555556,
            "unit": "ns",
            "range": "± 7743.399085108614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382321.45263157896,
            "unit": "ns",
            "range": "± 51175.64756396168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364192.72631578945,
            "unit": "ns",
            "range": "± 49027.58380302458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335217.0421686747,
            "unit": "ns",
            "range": "± 32533.75901530413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4903289.632653061,
            "unit": "ns",
            "range": "± 401932.8643011256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4489480.888888889,
            "unit": "ns",
            "range": "± 428264.73329114605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27208.406593406595,
            "unit": "ns",
            "range": "± 5072.902432375424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123973.72471910113,
            "unit": "ns",
            "range": "± 16287.335150741015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132272.5,
            "unit": "ns",
            "range": "± 16997.910788459085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144600.66315789474,
            "unit": "ns",
            "range": "± 24346.101760402704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9104.702127659575,
            "unit": "ns",
            "range": "± 1397.3447676093817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25598.967032967033,
            "unit": "ns",
            "range": "± 4885.352905370523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575656.2956989247,
            "unit": "ns",
            "range": "± 153309.04018549953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2999698.470588235,
            "unit": "ns",
            "range": "± 140476.00802712867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2719621.1129032257,
            "unit": "ns",
            "range": "± 216874.45054214486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6978760.8125,
            "unit": "ns",
            "range": "± 684565.7033299182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3383884.6931818184,
            "unit": "ns",
            "range": "± 219444.20763821097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3492237.401098901,
            "unit": "ns",
            "range": "± 216633.1319988322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4703997.778947368,
            "unit": "ns",
            "range": "± 325047.65662183176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4553071.344444444,
            "unit": "ns",
            "range": "± 277332.2728843411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9111577.152631579,
            "unit": "ns",
            "range": "± 1151379.360180083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6824096.011968086,
            "unit": "ns",
            "range": "± 386868.09527491796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2225561.5927372687,
            "unit": "ns",
            "range": "± 90118.1685457503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444614.395703125,
            "unit": "ns",
            "range": "± 25266.901447054235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656870.7814611485,
            "unit": "ns",
            "range": "± 90183.27937613787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994583.553030303,
            "unit": "ns",
            "range": "± 46594.72513968818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 846116.8996930803,
            "unit": "ns",
            "range": "± 24110.84122091755"
          }
        ]
      }
    ]
  }
}