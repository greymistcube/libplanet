window.BENCHMARK_DATA = {
  "lastUpdate": 1680268377031,
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
          "id": "70bbfb2f984e84ee4571d9e3a68ad6a3cb0c3fc0",
          "message": "Removed unnecessary code",
          "timestamp": "2023-03-31T21:50:08+09:00",
          "tree_id": "7fe50a118abcde3a3dc3a20aa6b369c7ce345b0a",
          "url": "https://github.com/greymistcube/libplanet/commit/70bbfb2f984e84ee4571d9e3a68ad6a3cb0c3fc0"
        },
        "date": 1680268359841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9311440.247474747,
            "unit": "ns",
            "range": "± 1305760.8743592899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23209328.4,
            "unit": "ns",
            "range": "± 3385193.4987562164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63817612.29591837,
            "unit": "ns",
            "range": "± 8923037.596463293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120214204.58163266,
            "unit": "ns",
            "range": "± 9259015.431789897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265281812.80645162,
            "unit": "ns",
            "range": "± 35760787.26708891"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83260.78947368421,
            "unit": "ns",
            "range": "± 18310.251178247836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387052.9459459459,
            "unit": "ns",
            "range": "± 19360.356816409192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324875.24418604653,
            "unit": "ns",
            "range": "± 27292.352522891633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320300.402173913,
            "unit": "ns",
            "range": "± 29675.356335311084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5925817.927083333,
            "unit": "ns",
            "range": "± 564617.2462938288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5631818.696969697,
            "unit": "ns",
            "range": "± 1378634.213738117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22057.236842105263,
            "unit": "ns",
            "range": "± 4082.0657844171337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110221.52173913043,
            "unit": "ns",
            "range": "± 21147.553587490587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107939.85416666667,
            "unit": "ns",
            "range": "± 13934.12822116159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 284143.9680851064,
            "unit": "ns",
            "range": "± 35623.616417185316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8597.357142857143,
            "unit": "ns",
            "range": "± 2232.2777385580525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20804.895833333332,
            "unit": "ns",
            "range": "± 3473.63466696793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1667518.9139784947,
            "unit": "ns",
            "range": "± 216596.73480540302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3234739.3595505618,
            "unit": "ns",
            "range": "± 315717.70717749535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2826099.2916666665,
            "unit": "ns",
            "range": "± 454092.2342405761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7422110.361702127,
            "unit": "ns",
            "range": "± 589691.7616432562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3835194.6515151514,
            "unit": "ns",
            "range": "± 724578.8755809476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3996623.2078651683,
            "unit": "ns",
            "range": "± 822666.1706709694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4918003.988888889,
            "unit": "ns",
            "range": "± 704135.2966125716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4919766.21978022,
            "unit": "ns",
            "range": "± 473112.9454301301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9392305.150537634,
            "unit": "ns",
            "range": "± 694443.5825619979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6884885.988867188,
            "unit": "ns",
            "range": "± 241371.9003850581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2111379.8909333884,
            "unit": "ns",
            "range": "± 71560.8345365083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1246023.9997395833,
            "unit": "ns",
            "range": "± 12933.239823191565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3103477.930935889,
            "unit": "ns",
            "range": "± 226646.8285219374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869264.3649453922,
            "unit": "ns",
            "range": "± 51172.30995438875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849962.6223725819,
            "unit": "ns",
            "range": "± 30887.459783067945"
          }
        ]
      }
    ]
  }
}