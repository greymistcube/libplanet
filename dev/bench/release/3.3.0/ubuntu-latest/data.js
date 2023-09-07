window.BENCHMARK_DATA = {
  "lastUpdate": 1694077116606,
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
          "id": "8d5061ad67fe49337166fe2937af64881f18cc6f",
          "message": "Changelog",
          "timestamp": "2023-09-07T17:44:12+09:00",
          "tree_id": "b801b394004dbb5681b75d049d42107df46a8d4f",
          "url": "https://github.com/greymistcube/libplanet/commit/8d5061ad67fe49337166fe2937af64881f18cc6f"
        },
        "date": 1694077109013,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1417117,
            "unit": "ns",
            "range": "± 76072.56610314964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815569.5,
            "unit": "ns",
            "range": "± 118462.95452958009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1843432.051020408,
            "unit": "ns",
            "range": "± 109773.79968501606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4793260.204081632,
            "unit": "ns",
            "range": "± 190563.0435524094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275791.0232558139,
            "unit": "ns",
            "range": "± 10111.860098038513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273275.4666666667,
            "unit": "ns",
            "range": "± 8132.34979713665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232114.61904761905,
            "unit": "ns",
            "range": "± 5172.838500051886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4321249.076923077,
            "unit": "ns",
            "range": "± 55360.84603077874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3860190.1333333333,
            "unit": "ns",
            "range": "± 62703.367534158875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20549.041666666668,
            "unit": "ns",
            "range": "± 1773.5795497519264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90040.25581395348,
            "unit": "ns",
            "range": "± 4890.4835516627045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77114.27906976744,
            "unit": "ns",
            "range": "± 2862.4575133098265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84964.50537634408,
            "unit": "ns",
            "range": "± 12911.081388569022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5452.040816326531,
            "unit": "ns",
            "range": "± 713.381607489625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20412.552083333332,
            "unit": "ns",
            "range": "± 1634.6416949726272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50078.09574468085,
            "unit": "ns",
            "range": "± 3356.108925491937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8011080.461538462,
            "unit": "ns",
            "range": "± 29641.321452254746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21649920.15,
            "unit": "ns",
            "range": "± 497040.8516077691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53821451.666666664,
            "unit": "ns",
            "range": "± 919268.9783868381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108692673.13333334,
            "unit": "ns",
            "range": "± 1893914.2772573596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209729328.73333332,
            "unit": "ns",
            "range": "± 2065183.254186814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335074.703703704,
            "unit": "ns",
            "range": "± 91705.91710454541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3605931.3333333335,
            "unit": "ns",
            "range": "± 76003.54198325233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4295685.613636363,
            "unit": "ns",
            "range": "± 160185.8209921848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3837119.7647058824,
            "unit": "ns",
            "range": "± 123594.93265528395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6118085.068965517,
            "unit": "ns",
            "range": "± 173523.87645527776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5035764.712740385,
            "unit": "ns",
            "range": "± 31054.43024597131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1585217.1812220982,
            "unit": "ns",
            "range": "± 5097.238718091193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091674.2993861607,
            "unit": "ns",
            "range": "± 394.08407134668937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631685.0065104165,
            "unit": "ns",
            "range": "± 3456.1412254994675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825745.452734375,
            "unit": "ns",
            "range": "± 2195.967414651137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769341.5716646635,
            "unit": "ns",
            "range": "± 312.60644960448957"
          }
        ]
      }
    ]
  }
}