window.BENCHMARK_DATA = {
  "lastUpdate": 1707192728698,
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
          "id": "74d9178258a05ac1b256134fc8a92c69da9ea88f",
          "message": "Prepare 4.0.3",
          "timestamp": "2024-02-06T12:59:40+09:00",
          "tree_id": "a9aeb51f656297f693ffd7fd27d8441e992b96d3",
          "url": "https://github.com/greymistcube/libplanet/commit/74d9178258a05ac1b256134fc8a92c69da9ea88f"
        },
        "date": 1707192707381,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970629.2929292929,
            "unit": "ns",
            "range": "± 107926.19951305469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1706921.2765957448,
            "unit": "ns",
            "range": "± 65834.32082382923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1467926.8041237113,
            "unit": "ns",
            "range": "± 141189.78695614514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10836167.391304348,
            "unit": "ns",
            "range": "± 908334.685390374"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34811.53846153846,
            "unit": "ns",
            "range": "± 1424.9394684293725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4884663.333333333,
            "unit": "ns",
            "range": "± 45319.41978361826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13276541.666666666,
            "unit": "ns",
            "range": "± 107373.53202157354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32576814.285714287,
            "unit": "ns",
            "range": "± 299787.41149006254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66037571.428571425,
            "unit": "ns",
            "range": "± 442774.34681539785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129682400,
            "unit": "ns",
            "range": "± 1044546.0900724842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3359336.237980769,
            "unit": "ns",
            "range": "± 4686.115098027471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081304.9386160714,
            "unit": "ns",
            "range": "± 1679.580363708845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742060.1004464285,
            "unit": "ns",
            "range": "± 2107.6512397330735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916778.9341517857,
            "unit": "ns",
            "range": "± 4015.5038704123076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 646299.82421875,
            "unit": "ns",
            "range": "± 1025.2162686584586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562731.9791666666,
            "unit": "ns",
            "range": "± 1463.691600872336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2167480.487804878,
            "unit": "ns",
            "range": "± 78132.97069583429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2209396.153846154,
            "unit": "ns",
            "range": "± 59358.89810816391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2699191.1764705884,
            "unit": "ns",
            "range": "± 60656.171424738866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2737379.2682926827,
            "unit": "ns",
            "range": "± 143794.25179345912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12454048.913043479,
            "unit": "ns",
            "range": "± 1428027.0566814167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171662.0253164557,
            "unit": "ns",
            "range": "± 8905.850911669773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163194.38202247192,
            "unit": "ns",
            "range": "± 8999.840396950505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143241.66666666666,
            "unit": "ns",
            "range": "± 5635.2927894382765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2814421.7391304346,
            "unit": "ns",
            "range": "± 68986.77710271558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2440693.75,
            "unit": "ns",
            "range": "± 47761.55313987741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10041.935483870968,
            "unit": "ns",
            "range": "± 1204.1885758581207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52888.76404494382,
            "unit": "ns",
            "range": "± 5195.658987914097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45307.142857142855,
            "unit": "ns",
            "range": "± 2121.410620972358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54166.666666666664,
            "unit": "ns",
            "range": "± 9956.364944022029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2487.6288659793813,
            "unit": "ns",
            "range": "± 539.1462641603628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9696.703296703297,
            "unit": "ns",
            "range": "± 1084.6863908727566"
          }
        ]
      }
    ]
  }
}