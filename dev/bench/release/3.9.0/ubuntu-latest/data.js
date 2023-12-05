window.BENCHMARK_DATA = {
  "lastUpdate": 1701752626214,
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
          "id": "6cb46fce638fc41db0b719897e9af8c8e27c8762",
          "message": "Release 3.9.0",
          "timestamp": "2023-12-05T13:52:46+09:00",
          "tree_id": "5787cbf94dba3ffe5c78fe22ca49a64303906978",
          "url": "https://github.com/greymistcube/libplanet/commit/6cb46fce638fc41db0b719897e9af8c8e27c8762"
        },
        "date": 1701752618314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197264.4375,
            "unit": "ns",
            "range": "± 9094.166195406951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188362.2093023256,
            "unit": "ns",
            "range": "± 6849.704496782671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166844.76666666666,
            "unit": "ns",
            "range": "± 4876.9688857571855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3010288.533333333,
            "unit": "ns",
            "range": "± 46804.732370420264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2719412.7,
            "unit": "ns",
            "range": "± 36072.92446103349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13853.173469387755,
            "unit": "ns",
            "range": "± 2741.380738066394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58614.8125,
            "unit": "ns",
            "range": "± 3215.775529407794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73277,
            "unit": "ns",
            "range": "± 18201.462594411405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66508.29896907216,
            "unit": "ns",
            "range": "± 15908.43845466727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3140.90625,
            "unit": "ns",
            "range": "± 664.234439876781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11776.835164835165,
            "unit": "ns",
            "range": "± 1085.9165843116257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3795877.17734375,
            "unit": "ns",
            "range": "± 70363.09899879289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205187.6987304688,
            "unit": "ns",
            "range": "± 2152.8220235893596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778554.49921875,
            "unit": "ns",
            "range": "± 13913.611479852092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933509.8551682692,
            "unit": "ns",
            "range": "± 8641.173944478498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615764.2182241586,
            "unit": "ns",
            "range": "± 784.3453186475849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583123.2425130209,
            "unit": "ns",
            "range": "± 2143.656383435624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41289.8969072165,
            "unit": "ns",
            "range": "± 6003.448301609209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2362875.7195121953,
            "unit": "ns",
            "range": "± 73697.28365398286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2457199.8333333335,
            "unit": "ns",
            "range": "± 94617.80516885656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3078835.75,
            "unit": "ns",
            "range": "± 93391.84097056321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2897897.9523809524,
            "unit": "ns",
            "range": "± 125693.49877539778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6844542.205882353,
            "unit": "ns",
            "range": "± 221004.52496955113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5689516.142857143,
            "unit": "ns",
            "range": "± 44194.56733034597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14931904.533333333,
            "unit": "ns",
            "range": "± 249464.18634054947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36309909,
            "unit": "ns",
            "range": "± 217226.54634390338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74839245.5,
            "unit": "ns",
            "range": "± 672357.6091207542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149996342.03846154,
            "unit": "ns",
            "range": "± 995295.0034540526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942513.581632653,
            "unit": "ns",
            "range": "± 72118.67276078208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1854527.4347826086,
            "unit": "ns",
            "range": "± 88329.59378747943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1390429.4736842106,
            "unit": "ns",
            "range": "± 105840.02204228575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6122564.90625,
            "unit": "ns",
            "range": "± 281950.72681416996"
          }
        ]
      }
    ]
  }
}