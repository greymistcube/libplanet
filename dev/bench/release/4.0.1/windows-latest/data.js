window.BENCHMARK_DATA = {
  "lastUpdate": 1706254467256,
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
          "id": "0d725d42ce3ab3a084b5628aa13d51a18762c422",
          "message": "Changelog",
          "timestamp": "2024-01-26T16:21:33+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/0d725d42ce3ab3a084b5628aa13d51a18762c422"
        },
        "date": 1706254439281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043707.2164948453,
            "unit": "ns",
            "range": "± 118072.79644304073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1852735.9550561798,
            "unit": "ns",
            "range": "± 107005.40050856292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1595259.5959595959,
            "unit": "ns",
            "range": "± 170508.83687626373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11523710.98901099,
            "unit": "ns",
            "range": "± 903590.5250659785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34989.55223880597,
            "unit": "ns",
            "range": "± 1657.867773390852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5030620,
            "unit": "ns",
            "range": "± 33170.73150491904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12970392.307692308,
            "unit": "ns",
            "range": "± 124913.14623595108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32564270,
            "unit": "ns",
            "range": "± 444467.246423015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65147833.333333336,
            "unit": "ns",
            "range": "± 794631.9468485904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130135542.85714285,
            "unit": "ns",
            "range": "± 879720.6704528307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3305558.6197916665,
            "unit": "ns",
            "range": "± 13675.450768415867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066453.0831473214,
            "unit": "ns",
            "range": "± 3113.1174084349095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739343.1640625,
            "unit": "ns",
            "range": "± 1745.9442573588133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2000179.4921875,
            "unit": "ns",
            "range": "± 5370.494216430091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641346.3936941965,
            "unit": "ns",
            "range": "± 1164.3028147274952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568780.3013392857,
            "unit": "ns",
            "range": "± 1586.9396690004014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2123830.612244898,
            "unit": "ns",
            "range": "± 48963.83105620598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2162411.86440678,
            "unit": "ns",
            "range": "± 79127.12618431302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2790519.0476190476,
            "unit": "ns",
            "range": "± 63906.87458362847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2871473.737373737,
            "unit": "ns",
            "range": "± 322912.7406572039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12350295.652173912,
            "unit": "ns",
            "range": "± 1543640.5085191722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173598.5507246377,
            "unit": "ns",
            "range": "± 7955.5842901778415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166635.7142857143,
            "unit": "ns",
            "range": "± 10458.091725533992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141246.66666666666,
            "unit": "ns",
            "range": "± 4209.163512060843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838760,
            "unit": "ns",
            "range": "± 49184.910578056646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2503193.75,
            "unit": "ns",
            "range": "± 48962.740510855125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11329.787234042553,
            "unit": "ns",
            "range": "± 1846.4048058137334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56734.73684210526,
            "unit": "ns",
            "range": "± 6326.670470201671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44544.61538461538,
            "unit": "ns",
            "range": "± 2072.8928132888627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53002.29885057471,
            "unit": "ns",
            "range": "± 9422.486427041928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2519.5876288659792,
            "unit": "ns",
            "range": "± 518.9410642632689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10219.354838709678,
            "unit": "ns",
            "range": "± 1303.278313274387"
          }
        ]
      }
    ]
  }
}