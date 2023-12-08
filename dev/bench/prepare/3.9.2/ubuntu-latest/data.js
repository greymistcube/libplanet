window.BENCHMARK_DATA = {
  "lastUpdate": 1702005477680,
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
          "id": "c667983c7f840a61f5dbec49f6002de8d3d4f6e2",
          "message": "Prepare 3.9.2",
          "timestamp": "2023-12-08T12:06:46+09:00",
          "tree_id": "b3037719533c28a873c12113bb86fca1a23b8831",
          "url": "https://github.com/greymistcube/libplanet/commit/c667983c7f840a61f5dbec49f6002de8d3d4f6e2"
        },
        "date": 1702005471660,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209881.17741935485,
            "unit": "ns",
            "range": "± 6079.836639181992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194464.193877551,
            "unit": "ns",
            "range": "± 7731.479402967029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168304.95945945947,
            "unit": "ns",
            "range": "± 5628.225522581077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3031361.785714286,
            "unit": "ns",
            "range": "± 37153.37114672011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2861760.8846153845,
            "unit": "ns",
            "range": "± 39119.5696945882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14787.742268041236,
            "unit": "ns",
            "range": "± 2972.135470633694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69434.1,
            "unit": "ns",
            "range": "± 12053.201397524765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70003.31,
            "unit": "ns",
            "range": "± 13356.427729404597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78419.45360824742,
            "unit": "ns",
            "range": "± 22179.01732682859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5716.234693877551,
            "unit": "ns",
            "range": "± 1568.1673380162724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14860.45744680851,
            "unit": "ns",
            "range": "± 2306.842578279986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3768930.50078125,
            "unit": "ns",
            "range": "± 54258.67435071593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1173192.924641927,
            "unit": "ns",
            "range": "± 5758.916151214233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767206.3642578125,
            "unit": "ns",
            "range": "± 2578.8075755193504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940925.1177455357,
            "unit": "ns",
            "range": "± 22052.105067882865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623046.2349446615,
            "unit": "ns",
            "range": "± 3654.354586288352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574899.5804036459,
            "unit": "ns",
            "range": "± 1010.9173818172492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40647.06842105263,
            "unit": "ns",
            "range": "± 5205.343516067768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2540882.1428571427,
            "unit": "ns",
            "range": "± 44088.23619063365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564015.1428571427,
            "unit": "ns",
            "range": "± 101550.92707971702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3096965.75,
            "unit": "ns",
            "range": "± 69088.54960874106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3035126.3421052634,
            "unit": "ns",
            "range": "± 66169.63906527856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6920255.766666667,
            "unit": "ns",
            "range": "± 203811.72814409286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5720744.066666666,
            "unit": "ns",
            "range": "± 32279.31042914257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14326547.92857143,
            "unit": "ns",
            "range": "± 84708.24422820528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36620019.23076923,
            "unit": "ns",
            "range": "± 171633.08496283277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75720403,
            "unit": "ns",
            "range": "± 1829355.498554536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148701428.2142857,
            "unit": "ns",
            "range": "± 1610946.7417447502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938110.2173913043,
            "unit": "ns",
            "range": "± 73391.24355302827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868702.9905660378,
            "unit": "ns",
            "range": "± 64069.47312296798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1428471.542105263,
            "unit": "ns",
            "range": "± 100304.98939626804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5894086.170212766,
            "unit": "ns",
            "range": "± 226857.28356902767"
          }
        ]
      }
    ]
  }
}