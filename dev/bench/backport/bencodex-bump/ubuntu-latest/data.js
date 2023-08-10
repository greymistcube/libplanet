window.BENCHMARK_DATA = {
  "lastUpdate": 1691648556616,
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
          "id": "a6f332b868049573eac1ea2d202dfd18c35de0cf",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-10T15:07:06+09:00",
          "tree_id": "2fd4fb29c11262bfa240ed8ebc6a274ff8869231",
          "url": "https://github.com/greymistcube/libplanet/commit/a6f332b868049573eac1ea2d202dfd18c35de0cf"
        },
        "date": 1691648549044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3800807.769230769,
            "unit": "ns",
            "range": "± 62632.09680634183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3600585.5,
            "unit": "ns",
            "range": "± 114130.9980473566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4478074.35,
            "unit": "ns",
            "range": "± 158560.54899393787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4103536.365079365,
            "unit": "ns",
            "range": "± 186470.18781246556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6558631.0625,
            "unit": "ns",
            "range": "± 197869.2619384337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8013949.611111111,
            "unit": "ns",
            "range": "± 116132.57131609085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21968612.214285713,
            "unit": "ns",
            "range": "± 209677.02096436083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53813639.15789474,
            "unit": "ns",
            "range": "± 1191170.0317988128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116500618.625,
            "unit": "ns",
            "range": "± 2244780.440203299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231638395.06666666,
            "unit": "ns",
            "range": "± 4288880.037378548"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52456.28421052632,
            "unit": "ns",
            "range": "± 4201.996938293612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5203037.388541667,
            "unit": "ns",
            "range": "± 73247.88121547461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1593072.672265625,
            "unit": "ns",
            "range": "± 10370.032119539275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1071650.5946614584,
            "unit": "ns",
            "range": "± 5425.559588926811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652518.048076923,
            "unit": "ns",
            "range": "± 9199.883434478725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825801.8864583333,
            "unit": "ns",
            "range": "± 4378.018383449263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771877.4833984375,
            "unit": "ns",
            "range": "± 615.6491207162642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305478.7272727273,
            "unit": "ns",
            "range": "± 9622.840109190502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296297.88,
            "unit": "ns",
            "range": "± 6356.155660197968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257141.6507936508,
            "unit": "ns",
            "range": "± 11817.729974367152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4551533.405405405,
            "unit": "ns",
            "range": "± 151012.1260985465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4046849.230769231,
            "unit": "ns",
            "range": "± 62654.29056491109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24192.1875,
            "unit": "ns",
            "range": "± 3022.2191056189854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99822.41836734694,
            "unit": "ns",
            "range": "± 14232.088531828473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81786.63,
            "unit": "ns",
            "range": "± 10868.303099180512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103263.13684210526,
            "unit": "ns",
            "range": "± 14084.532385692764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7002.275510204082,
            "unit": "ns",
            "range": "± 1435.935398861434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22000.448979591838,
            "unit": "ns",
            "range": "± 5425.465369602089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1545086.670212766,
            "unit": "ns",
            "range": "± 91168.0300406465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2902062.263157895,
            "unit": "ns",
            "range": "± 63917.284526211515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1903068.414893617,
            "unit": "ns",
            "range": "± 125017.76811544808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5125159.91,
            "unit": "ns",
            "range": "± 399984.3940914054"
          }
        ]
      }
    ]
  }
}