window.BENCHMARK_DATA = {
  "lastUpdate": 1709021259062,
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
          "id": "944369e564459c008868c197e3dad60be589a32d",
          "message": "Changed ITrie.IterateNodes() to use a stack instead of a queue",
          "timestamp": "2024-02-27T16:52:46+09:00",
          "tree_id": "2f8d8ac0f86ec7b61eecae2b1b8a34ddcc03056d",
          "url": "https://github.com/greymistcube/libplanet/commit/944369e564459c008868c197e3dad60be589a32d"
        },
        "date": 1709021244568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7644971.333333333,
            "unit": "ns",
            "range": "± 161883.4584897056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18884035.214285713,
            "unit": "ns",
            "range": "± 155284.65770427923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46450888,
            "unit": "ns",
            "range": "± 552161.7858686473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91934498.14285715,
            "unit": "ns",
            "range": "± 1310382.537374538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192292595.34615386,
            "unit": "ns",
            "range": "± 1777042.2523938408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33518.74444444444,
            "unit": "ns",
            "range": "± 3208.0304278626136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223866.2,
            "unit": "ns",
            "range": "± 21281.922801268425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215242.39361702127,
            "unit": "ns",
            "range": "± 20583.139744229902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187729.18367346938,
            "unit": "ns",
            "range": "± 5502.4412069911805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3872726.379310345,
            "unit": "ns",
            "range": "± 101616.51389710722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3417889.9210526315,
            "unit": "ns",
            "range": "± 75844.861766427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12337.341463414634,
            "unit": "ns",
            "range": "± 658.9520574837213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58931.71276595745,
            "unit": "ns",
            "range": "± 5940.2359477999025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52216.970588235294,
            "unit": "ns",
            "range": "± 3349.8556812845195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62005.978494623654,
            "unit": "ns",
            "range": "± 11180.141359822755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3469.887640449438,
            "unit": "ns",
            "range": "± 455.6955083416758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11951.76923076923,
            "unit": "ns",
            "range": "± 737.8301381893484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012139.4210526316,
            "unit": "ns",
            "range": "± 61388.10751391492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2228094.0977011495,
            "unit": "ns",
            "range": "± 121454.24075561266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1734841.9795918367,
            "unit": "ns",
            "range": "± 107966.66900502586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11630459.448979592,
            "unit": "ns",
            "range": "± 3968959.579299759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2905281.6585365855,
            "unit": "ns",
            "range": "± 102506.62413756727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3006187.5,
            "unit": "ns",
            "range": "± 67530.70897980999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3558188.3863636362,
            "unit": "ns",
            "range": "± 125381.21714459948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3740838.352112676,
            "unit": "ns",
            "range": "± 183108.05389457877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16311970.774725275,
            "unit": "ns",
            "range": "± 2002196.4460762592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4426085.0546875,
            "unit": "ns",
            "range": "± 73447.62143675725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1313917.3446614584,
            "unit": "ns",
            "range": "± 10652.753680706557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 874691.9905831473,
            "unit": "ns",
            "range": "± 15087.544671122023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2434408.796472294,
            "unit": "ns",
            "range": "± 363192.75277385296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 717144.8638095543,
            "unit": "ns",
            "range": "± 32165.650162987484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591295.6902960526,
            "unit": "ns",
            "range": "± 33590.84300777322"
          }
        ]
      }
    ]
  }
}