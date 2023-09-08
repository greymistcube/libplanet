window.BENCHMARK_DATA = {
  "lastUpdate": 1694145005324,
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
          "id": "3c1f78823463023c40ab0bbe7fd293285de5bd1e",
          "message": "Prepare 3.3.2",
          "timestamp": "2023-09-08T12:31:29+09:00",
          "tree_id": "7ade798411f9b01c80af1bba967751e414104264",
          "url": "https://github.com/greymistcube/libplanet/commit/3c1f78823463023c40ab0bbe7fd293285de5bd1e"
        },
        "date": 1694144979778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1302650.505050505,
            "unit": "ns",
            "range": "± 118561.69699629085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2476718.8235294116,
            "unit": "ns",
            "range": "± 124359.24678327785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1687330.303030303,
            "unit": "ns",
            "range": "± 152601.59510129064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4164744.6428571427,
            "unit": "ns",
            "range": "± 171555.46775382524"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47570.833333333336,
            "unit": "ns",
            "range": "± 3851.395281457758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7125900,
            "unit": "ns",
            "range": "± 167503.36116030626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19734980,
            "unit": "ns",
            "range": "± 282182.61108721775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48357392.85714286,
            "unit": "ns",
            "range": "± 573702.1988993749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95109900,
            "unit": "ns",
            "range": "± 1383997.7661349988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190189826.66666666,
            "unit": "ns",
            "range": "± 2205348.2871894687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4060718.6979166665,
            "unit": "ns",
            "range": "± 17345.266613092987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1299238.5807291667,
            "unit": "ns",
            "range": "± 7117.949372789297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 953315.76171875,
            "unit": "ns",
            "range": "± 3375.925117696264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2361865.5691964286,
            "unit": "ns",
            "range": "± 7021.469220316946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 743592.7584134615,
            "unit": "ns",
            "range": "± 1521.3685254169043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 687244.921875,
            "unit": "ns",
            "range": "± 4274.411515194335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3027607.407407407,
            "unit": "ns",
            "range": "± 82134.85124582492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3290307.1428571427,
            "unit": "ns",
            "range": "± 55579.58208780401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3885155.5555555555,
            "unit": "ns",
            "range": "± 137995.8193628204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3601027.0833333335,
            "unit": "ns",
            "range": "± 142139.20916763754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5727891.935483871,
            "unit": "ns",
            "range": "± 249447.87641639987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238130.98591549296,
            "unit": "ns",
            "range": "± 11683.487634255398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227357.6923076923,
            "unit": "ns",
            "range": "± 7958.306701210246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215840.52631578947,
            "unit": "ns",
            "range": "± 15828.711279945523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3863781.25,
            "unit": "ns",
            "range": "± 72578.35507229411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3544043.3333333335,
            "unit": "ns",
            "range": "± 66073.9463098155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23429.787234042553,
            "unit": "ns",
            "range": "± 2576.8543709079745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85764.04494382022,
            "unit": "ns",
            "range": "± 4904.085661953232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68477.08333333333,
            "unit": "ns",
            "range": "± 5093.390540002058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91113.68421052632,
            "unit": "ns",
            "range": "± 16783.56979327101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6431.632653061224,
            "unit": "ns",
            "range": "± 1191.689170950168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20594.791666666668,
            "unit": "ns",
            "range": "± 1964.0650536801777"
          }
        ]
      }
    ]
  }
}