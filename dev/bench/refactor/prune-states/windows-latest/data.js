window.BENCHMARK_DATA = {
  "lastUpdate": 1705567390337,
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
          "id": "46bdf3567a04df25b0114e104657b6d6f285e9b4",
          "message": "Updated tests",
          "timestamp": "2024-01-18T17:29:08+09:00",
          "tree_id": "9ecf5d78b18d3302db8b279468415eba52fde7b0",
          "url": "https://github.com/greymistcube/libplanet/commit/46bdf3567a04df25b0114e104657b6d6f285e9b4"
        },
        "date": 1705567370883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990765,
            "unit": "ns",
            "range": "± 22020.42771705639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1636298.3333333333,
            "unit": "ns",
            "range": "± 56067.03763388563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1329987.3684210526,
            "unit": "ns",
            "range": "± 122254.12688688042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5398970.202020202,
            "unit": "ns",
            "range": "± 331566.06260808447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32968.604651162794,
            "unit": "ns",
            "range": "± 1693.1183640849335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5045306.666666667,
            "unit": "ns",
            "range": "± 26556.69048514535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12881146.153846154,
            "unit": "ns",
            "range": "± 79798.32512219597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31657056.666666668,
            "unit": "ns",
            "range": "± 267178.9942199442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63133160,
            "unit": "ns",
            "range": "± 190206.96171726807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129504460,
            "unit": "ns",
            "range": "± 701606.7058646786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3331911.9698660714,
            "unit": "ns",
            "range": "± 14638.623517447151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065032.9036458333,
            "unit": "ns",
            "range": "± 3615.0263355509123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730505.5106026785,
            "unit": "ns",
            "range": "± 1473.2497750452726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944056.5104166667,
            "unit": "ns",
            "range": "± 3170.375227402167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611430.029296875,
            "unit": "ns",
            "range": "± 1359.6460077997713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563604.5003255209,
            "unit": "ns",
            "range": "± 663.2525015613245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2125230.434782609,
            "unit": "ns",
            "range": "± 81698.15683917156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2199122.950819672,
            "unit": "ns",
            "range": "± 81726.29604038638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2731311.111111111,
            "unit": "ns",
            "range": "± 56367.396593179736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2616324,
            "unit": "ns",
            "range": "± 69581.85395632974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5933281.481481481,
            "unit": "ns",
            "range": "± 165851.3144054894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165607.24637681158,
            "unit": "ns",
            "range": "± 7047.763909892432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 153207.40740740742,
            "unit": "ns",
            "range": "± 4943.829844260491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143127.58620689655,
            "unit": "ns",
            "range": "± 4101.7327829418755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2655626.6666666665,
            "unit": "ns",
            "range": "± 37436.507519239756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2421666.6666666665,
            "unit": "ns",
            "range": "± 26888.43392218816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9691.666666666666,
            "unit": "ns",
            "range": "± 1500.292369167575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47908.10810810811,
            "unit": "ns",
            "range": "± 2215.867853532092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43041.46341463415,
            "unit": "ns",
            "range": "± 972.6190440650691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 43412.5,
            "unit": "ns",
            "range": "± 4035.8682781553575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2142.1052631578946,
            "unit": "ns",
            "range": "± 341.952761254316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8472.619047619048,
            "unit": "ns",
            "range": "± 449.457823443428"
          }
        ]
      }
    ]
  }
}