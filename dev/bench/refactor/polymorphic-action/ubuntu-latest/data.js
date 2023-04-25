window.BENCHMARK_DATA = {
  "lastUpdate": 1682403702461,
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
          "id": "4d274668f6e5f59f976c213633050e5f9f0b6354",
          "message": "More generic action type attribute",
          "timestamp": "2023-04-25T15:05:55+09:00",
          "tree_id": "25a1af8f6e05b1ac97500b0c46b20ad00c536bb8",
          "url": "https://github.com/greymistcube/libplanet/commit/4d274668f6e5f59f976c213633050e5f9f0b6354"
        },
        "date": 1682403695239,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7200002.052631579,
            "unit": "ns",
            "range": "± 159857.10675595867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23309281.066666666,
            "unit": "ns",
            "range": "± 385442.7498592582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63308106.5625,
            "unit": "ns",
            "range": "± 1189621.2551985313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125516028.76470588,
            "unit": "ns",
            "range": "± 2576511.3686512844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247483714.6153846,
            "unit": "ns",
            "range": "± 2316558.2412509993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56052.885416666664,
            "unit": "ns",
            "range": "± 5571.991402248612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525043.9278350514,
            "unit": "ns",
            "range": "± 137382.03639768914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3013452.282608696,
            "unit": "ns",
            "range": "± 115445.89247332622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2629781.701298701,
            "unit": "ns",
            "range": "± 134705.73776511458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6603835.02,
            "unit": "ns",
            "range": "± 817095.5418728981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5637098.040736607,
            "unit": "ns",
            "range": "± 44294.189450569196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1741802.2947916666,
            "unit": "ns",
            "range": "± 5216.3961091882165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1259128.8663504464,
            "unit": "ns",
            "range": "± 7746.394335265719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2434348.218191964,
            "unit": "ns",
            "range": "± 5241.38548264833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 758724.7876953125,
            "unit": "ns",
            "range": "± 2451.6487349261815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704656.7126302083,
            "unit": "ns",
            "range": "± 1492.8699470312247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307277.8333333333,
            "unit": "ns",
            "range": "± 8940.721011900756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314137.4776119403,
            "unit": "ns",
            "range": "± 14840.866466126574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230843.8383838384,
            "unit": "ns",
            "range": "± 17788.646154050675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4412021.785714285,
            "unit": "ns",
            "range": "± 74759.01472596267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196715.615384615,
            "unit": "ns",
            "range": "± 55503.528444202624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27034.212765957447,
            "unit": "ns",
            "range": "± 2867.815885694875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114334.01041666667,
            "unit": "ns",
            "range": "± 11445.98833836535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90368.72164948453,
            "unit": "ns",
            "range": "± 10547.177155664158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133189.70103092783,
            "unit": "ns",
            "range": "± 19948.578528183483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9116.60824742268,
            "unit": "ns",
            "range": "± 1384.9911819567437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23208.505263157895,
            "unit": "ns",
            "range": "± 3524.8807671812597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3448017.361111111,
            "unit": "ns",
            "range": "± 169552.71388014196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4106363.703703704,
            "unit": "ns",
            "range": "± 214859.52420438823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4463133.619047619,
            "unit": "ns",
            "range": "± 150028.20803613652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5329390.692307692,
            "unit": "ns",
            "range": "± 145660.55569790173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7555912.57,
            "unit": "ns",
            "range": "± 548244.6717371054"
          }
        ]
      }
    ]
  }
}